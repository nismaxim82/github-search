import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Repositories } from '../types/Repositories';
import { ApiService } from './ApiService';

const routes = {
    searchRepositories: '/search/repositories',
};


@Injectable({
    providedIn: 'root'
})
export class SearchRepositoriesService {
    constructor(private apiService: ApiService) {
    }

    getAllByKeywordAndPage(keyword: string, page: number = 1): Observable<Repositories> {
        return this.apiService.get<Repositories>(routes.searchRepositories, { q: keyword, page });
    }


}