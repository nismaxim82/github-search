import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Repository } from 'src/app/data/data-github/types/Repository';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-repository-item-cards',
  templateUrl: './repository-item-cards.component.html',
  styleUrls: ['./repository-item-cards.component.css']
})
export class RepositoryItemCardsComponent implements OnInit {
  @Input() totalCount: number;
  @Input() repositoryItems: Repository[];
  @Input() hidePaginator: boolean;
  @Output() onToggleFavorite = new EventEmitter<number>();
  @Output() onPageChanged = new EventEmitter<number>();

  pageSize = 30;

  constructor() { }

  ngOnInit(): void { }

  handlePageChanged(event: PageEvent) {
    this.onPageChanged.emit(event.pageIndex + 1);
  }
}
