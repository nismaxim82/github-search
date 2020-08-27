using GitHubSearchApi.Models;
using MiscUtil.Reflection;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.SessionState;

namespace GitHubSearchApi.Repositories
{
    public class SessionBookmarksRepository : IBookmarksRepository<RepositoryEntry>
    {
        private readonly string sessionKey = "BookmarkedData";
        private object _dataToSave;

        public void Add(RepositoryEntry item)
        {
            List<RepositoryEntry> data = this.GetAll().ToList();
            data.Add(item);
            this._dataToSave = data;
            SaveChanges();
        }

        public RepositoryEntry Find(int id)
        {
            List<RepositoryEntry> data = this.GetAll().ToList();
            return data.Find(item => item.id == id);
        }

        public IEnumerable<RepositoryEntry> GetAll()
        {
            List<RepositoryEntry> data = HttpContext.Current.Session[sessionKey] as List<RepositoryEntry>;
            if (data == null)
            {
                data = new List<RepositoryEntry>();
            }
            return data;
        }

        public void Remove(RepositoryEntry item)
        {
            List<RepositoryEntry> data = this.GetAll().ToList();
            RepositoryEntry repItem = data.Find(origItem => origItem.id == item.id);
            if (repItem != null)
            {
                data.Remove(repItem);
                this._dataToSave = data;
                this.SaveChanges();
            }
        }

        public void Update(RepositoryEntry item)
        {
            List<RepositoryEntry> data = this.GetAll().ToList();
            RepositoryEntry repItem = data.Find(origItem => origItem.id == item.id);
            if (repItem != null)
            {
                PropertyCopy.Copy(item, repItem);
                this._dataToSave = data;
                SaveChanges();
            }
        }

        public void SaveChanges()
        {

            HttpContext.Current.Session[sessionKey] = this._dataToSave;
        }
    }
}