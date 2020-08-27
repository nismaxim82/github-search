import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreModule } from '@app/core.module';
import { SharedModule } from '@shared/shared.module';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { GithubRoutingModule } from './github-routing.module';
import { RepositoryItemCardsComponent } from './repository-item-cards/repository-item-cards.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    SearchComponent,
    BookmarksComponent,
    RepositoryItemCardsComponent
  ],
  imports: [
    CommonModule,
    GithubRoutingModule,
    SharedModule,
    CoreModule
  ]
})
export class GithubModule { }
