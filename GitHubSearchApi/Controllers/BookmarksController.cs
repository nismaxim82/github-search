using GitHubSearchApi.Models;
using GitHubSearchApi.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace GitHubSearchApi.Controllers
{
    public class BookmarksController : ApiController
    {
        private readonly IBookmarksRepository<RepositoryEntry> BookmarksRepository;
        public BookmarksController(IBookmarksRepository<RepositoryEntry> bookmarksRepository)
        {
            this.BookmarksRepository = bookmarksRepository;
        }
        // GET api/bookmarks
        public IEnumerable<RepositoryEntry> Get()
        {
            return this.BookmarksRepository.GetAll();
        }

        // GET api/bookmarks/2346262
        public RepositoryEntry Get(int id)
        {
            return this.BookmarksRepository.Find(id);
        }

        // POST api/bookmarks
        public void Post([FromBody]RepositoryEntry item)
        {
            this.BookmarksRepository.Add(item);
        }

        // PUT api/bookmarks/5
        public void Put(int id, [FromBody]RepositoryEntry item)
        {
            this.BookmarksRepository.Update(item);
        }

        // DELETE api/bookmarks/5
        public void Delete(int id)
        {
            RepositoryEntry item = this.Get(id);
            this.BookmarksRepository.Remove(item);
        }
    }
}
