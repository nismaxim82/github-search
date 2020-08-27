import { Observable, Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { SearchRepositoriesService } from 'src/app/data/data-github/services/SearchRepositoriesService';
import { Repositories } from 'src/app/data/data-github/types/Repositories';
import { FormControl } from '@angular/forms';
import { BookmarksService } from 'src/app/data/data-api/services/BookmarksService';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {
  repositories: Repositories;
  bookmarked: number[];
  searchValue = new FormControl('');
  page = 1;

  private subsribtions = new Array<Subscription>();

  constructor(private searchService: SearchRepositoriesService, private bookmarksService: BookmarksService) { }

  ngOnInit(): void {
    this.bookmarked = [];
    this.subsribtions.push(this.bookmarksService.getAll().subscribe(data => {
      data.forEach(d => {
        this.bookmarked.push(d.id);
      });
    }));
  }

  search() {
    if (this.searchValue.value) {
      this.subsribtions.push(this.searchService.getAllByKeywordAndPage(this.searchValue.value, this.page).subscribe((data) => {
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
      this.subsribtions.push(this.bookmarksService.delete(item.id).subscribe(() => {
        this.bookmarked.splice(this.bookmarked.indexOf(bm), 1);
      }));
    } else {
      this.subsribtions.push(this.bookmarksService.post(item).subscribe(() => {
        this.bookmarked.push(repId);
      }));
    }
  }

  pageChanged(newPage: number) {
    this.page = newPage;
    this.search();
  }

  ngOnDestroy(): void {
    this.subsribtions.forEach(s => {
      s.unsubscribe();
    });
  }
}
