## GitHub search repositories

Source tree of the project:
##### github-search-app     - client side Angular 9 application
##### GitHubSearchApi       - .Net 4.5.2 Web Api project, for bookmars save logics


### How to build and run

The first time after downloading the project you need to install the libraries and packages.<br />
Open terminal or command prompt window from the root of the project.<br />
In the terminal type:<br />
```
  cd .\github-search-app\   ↵
  npm install               ↵
  ng serve                  ↵
```
This will launch the client application Angular 9.

#### To build and run Bookmarks api project, you must
```
  Double click on the GitHubSearchApi.sln in the root or open it through Microsoft Visual Studio.
  Run server on the iis_express by press Ctrl+F5 in the Microsoft Visual Studio.
```

#### Please check that the Angular application is runned on the http://localhost:4200 port and iis_express is runned on the port 44385.
#### If port of the Angular application is different, then you must enter it new value in the Bookmarks api project. You can find it in the WebApiConfig.cs file.
#### If port of the api runned on the iis_express is different than 44385, then you must also change it in the environment.ts of the Angular application project.