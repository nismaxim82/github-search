import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ApiService as BookmarksApiService } from './data-api/services/ApiService';
import { ApiService as SearchApiService } from './data-github/services/ApiService';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    SearchApiService,
    BookmarksApiService
  ]
})
export class DataModule { }
