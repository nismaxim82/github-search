using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace GitHubSearchApi.Models
{
    public class OwnerEntry
    {
        public string login; // "jcoene",
        public int id; // 283933,
        public string node_id; // "MDQ6VXNlcjI4MzkzMw==",
        public string avatar_url; // "https://avatars0.githubusercontent.com/u/283933?v=4",
        public string gravatar_id; // "",
        public string url; // "https://api.github.com/users/jcoene",
        public string html_url; // "https://github.com/jcoene",
        public string followers_url; // "https://api.github.com/users/jcoene/followers",
        public string following_url; // "https://api.github.com/users/jcoene/following{/other_user}",
        public string gists_url; // "https://api.github.com/users/jcoene/gists{/gist_id}",
        public string starred_url; // "https://api.github.com/users/jcoene/starred{/owner}{/repo}",
        public string subscriptions_url; // "https://api.github.com/users/jcoene/subscriptions",
        public string organizations_url; // "https://api.github.com/users/jcoene/orgs",
        public string repos_url; // "https://api.github.com/users/jcoene/repos",
        public string events_url; // "https://api.github.com/users/jcoene/events{/privacy}",
        public string received_events_url; // "https://api.github.com/users/jcoene/received_events",
        public string type; // "User",
        public bool site_admin; // false
    }
}