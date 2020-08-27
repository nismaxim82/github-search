import { Component, OnInit, OnDestroy } from '@angular/core';
import { BookmarksService } from 'src/app/data/data-api/services/BookmarksService';
import { Repository } from 'src/app/data/data-github/types/Repository';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css']
})
export class BookmarksComponent implements OnInit, OnDestroy {
  bookmarkedRepositories: Repository[];

  private subsribtions = new Array<Subscription>();

  constructor(private bookmarksService: BookmarksService) { }

  ngOnInit(): void {
    this.subsribtions.push(this.bookmarksService.getAll().subscribe(data => {
      this.bookmarkedRepositories = data;
    }));
  }

  toggleFavorite(repId: number) {
    const item = this.bookmarkedRepositories.find(b => b.id === repId);
    item.bookmarked = !item.bookmarked;
    if (!item.bookmarked) {
      this.subsribtions.push(this.bookmarksService.delete(item.id).subscribe(() => { }));
    } else {
      this.subsribtions.push(this.bookmarksService.post(item).subscribe(() => { }));
    }
  }

  ngOnDestroy(): void {
    this.subsribtions.forEach(s => {
      s.unsubscribe();
    });
  }
}
