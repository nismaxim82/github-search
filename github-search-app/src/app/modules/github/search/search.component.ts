import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { SearchRepositories } from 'src/app/data/data-github/services/SearchRepositories';
import { Repositories } from 'src/app/data/data-github/types/Repositories';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  repositories$: Observable<Repositories>;
  searchValue = new FormControl('');

  constructor(private service: SearchRepositories) { }

  ngOnInit(): void {
  }

  search() {
    if (this.searchValue.value) {
      this.repositories$ = this.service.getAllByKeywordAndPage(this.searchValue.value);
    }
  }

  handleSearchKeyUp(event: KeyboardEvent) {
    if (event.keyCode === 13 || event.key === 'Enter' || event.code === 'Enter') {
      this.search();
    }
  }

}
