import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './ApiService';
import { Repository } from '../../data-github/types/Repository';

const routes = {
    bookmarks: '/bookmarks',
};


@Injectable({
    providedIn: 'root'
})
export class BookmarksService {
    constructor(private apiService: ApiService) {
    }

    getAll(): Observable<Repository[]> {
        return this.apiService.get<Repository[]>(routes.bookmarks);
    }

    post(bookmark: Repository): Observable<void> {
        return this.apiService.post<Repository>(routes.bookmarks, bookmark);
    }

    delete(id: number): Observable<void> {
        return this.apiService.delete<Repository>(routes.bookmarks, id);
    }
}