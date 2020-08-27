using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GitHubSearchApi.Repositories
{
    public interface IBookmarksRepository<T>
    {
        IEnumerable<T> GetAll();
        T Find(int id);
        void Add(T item);
        void Remove(T item);
        void Update(T item);
        void SaveChanges();
    }
}
