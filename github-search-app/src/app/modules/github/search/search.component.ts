import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import PageBase from '@shared/PageBase';
import { BookmarksService } from 'src/app/data/data-api/services/BookmarksService';
import { SearchRepositoriesService } from 'src/app/data/data-github/services/SearchRepositoriesService';
import { Repositories } from 'src/app/data/data-github/types/Repositories';
import { library, AppService } from '@app/services/AppService';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent extends PageBase implements OnInit {
  currentLibrary: library;
  repositories: Repositories;
  bookmarked: number[];
  searchValue = new FormControl('');
  page = 1;
  searchRepositoriesHeader = 'Search repositories';
  searchLabelText = 'Search keywords';
  searchPlaceholder = 'Type here to search';
  searchButtonText = 'Search';

  constructor(private searchService: SearchRepositoriesService,
    private bookmarksService: BookmarksService,
    private appService: AppService) {
    super();

    this.subscribtions.push(appService.execChangeLibrary.subscribe((library) => {
      this.currentLibrary = library;
    }));
  }

  ngOnInit(): void {
    this.currentLibrary = this.appService.currentLibrary;
    this.bookmarked = [];
    this.subscribtions.push(this.bookmarksService.getAll().subscribe(data => {
      data.forEach(d => {
        this.bookmarked.push(d.id);
      });
    }));
  }

  search() {
    if (this.searchValue.value) {
      this.subscribtions.push(this.searchService.getAllByKeywordAndPage(this.searchValue.value, this.page).subscribe((data) => {
        this.repositories = data;
        this.repositories.items.forEach(i => {
          i.bookmarked = this.bookmarked.indexOf(i.id) !== -1;
        })
      }));
    }
  }

  handleButtonSearchClick() {
    this.page = 1;
    this.search();
  }

  handleSearchKeyUp(event: KeyboardEvent) {
    if (event.keyCode === 13 || event.key === 'Enter' || event.code === 'Enter') {
      this.handleButtonSearchClick();
    }
  }

  toggleFavorite(repId: number) {
    const bm = this.bookmarked.find(b => b === repId);
    const item = this.repositories.items.find(i => i.id === repId);
    item.bookmarked = !Boolean(bm);
    if (!item.bookmarked) {
      this.subscribtions.push(this.bookmarksService.delete(item.id).subscribe(() => {
        this.bookmarked.splice(this.bookmarked.indexOf(bm), 1);
      }));
    } else {
      this.subscribtions.push(this.bookmarksService.post(item).subscribe(() => {
        this.bookmarked.push(repId);
      }));
    }
  }

  pageChanged(newPage: number) {
    this.page = newPage;
    this.search();
  }
}
