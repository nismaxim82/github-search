using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Web.Http;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using GitHubSearchApi;
using GitHubSearchApi.Controllers;
using GitHubSearchApi.Repositories;
using GitHubSearchApi.Models;

namespace GitHubSearchApi.Tests.Controllers
{
    [TestClass]
    public class ValuesControllerTest
    {
        private readonly IBookmarksRepository<RepositoryEntry> BookmarksRepository;
        public ValuesControllerTest(IBookmarksRepository<RepositoryEntry> bookmarksRepository) {
            this.BookmarksRepository = bookmarksRepository;
        }
        [TestMethod]
        public void Get()
        {
            // Arrange
            BookmarksController controller = new BookmarksController(this.BookmarksRepository);

            // Act
            IEnumerable<RepositoryEntry> result = controller.Get();

            // Assert
            Assert.IsNotNull(result);
            Assert.AreEqual(2, result.Count());
            Assert.AreEqual("value1", result.ElementAt(0));
            Assert.AreEqual("value2", result.ElementAt(1));
        }

        [TestMethod]
        public void GetById()
        {
            // Arrange
            BookmarksController controller = new BookmarksController(this.BookmarksRepository);

            // Act
            RepositoryEntry result = controller.Get(5);

            // Assert
            Assert.AreEqual("value", result);
        }

        [TestMethod]
        public void Post()
        {
            // Arrange
            BookmarksController controller = new BookmarksController(this.BookmarksRepository);

            RepositoryEntry item = new RepositoryEntry();

            // Act
            controller.Post(item);

            // Assert
        }

        [TestMethod]
        public void Put()
        {
            // Arrange
            BookmarksController controller = new BookmarksController(this.BookmarksRepository);

            RepositoryEntry item = new RepositoryEntry();

            // Act
            controller.Put(5, item);

            // Assert
        }

        [TestMethod]
        public void Delete()
        {
            // Arrange
            BookmarksController controller = new BookmarksController(this.BookmarksRepository);

            // Act
            controller.Delete(5);

            // Assert
        }
    }
}
