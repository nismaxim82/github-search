import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Repository } from 'src/app/data/data-github/types/Repository';
import { PageEvent } from '@angular/material/paginator';
import { library, AppService } from '@app/services/AppService';
import PageBase from '@shared/PageBase';

@Component({
  selector: 'app-repository-item-cards',
  templateUrl: './repository-item-cards.component.html',
  styleUrls: ['./repository-item-cards.component.css']
})
export class RepositoryItemCardsComponent extends PageBase implements OnInit {
  @Input() totalCount: number;
  @Input() repositoryItems: Repository[];
  @Input() hidePaginator: boolean;
  @Output() onToggleFavorite = new EventEmitter<number>();
  @Output() onPageChanged = new EventEmitter<number>();
  currentLibrary: library;

  pageSize = 30;

  constructor(private appService: AppService) {
    super();

    this.subscribtions.push(appService.execChangeLibrary.subscribe((library) => {
      this.currentLibrary = library;
    }));
  }

  ngOnInit(): void {
    this.currentLibrary = this.appService.currentLibrary;
  }

  handlePageChanged(event: PageEvent) {
    this.onPageChanged.emit(event.pageIndex + 1);
  }
}
