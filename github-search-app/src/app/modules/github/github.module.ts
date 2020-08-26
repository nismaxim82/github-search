import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GithubRoutingModule } from './github-routing.module';
import { SearchComponent } from './search/search.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { SharedModule } from '@shared/shared.module';
import { CoreModule } from '@app/core.module';


@NgModule({
  declarations: [SearchComponent, BookmarksComponent],
  imports: [
    CommonModule,
    GithubRoutingModule,
    SharedModule,
    CoreModule
  ]
})
export class GithubModule { }
