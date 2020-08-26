import { Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class ApiService {
    private baseUrl = 'https://api.github.com';

    constructor(private http: HttpClient) { }

    public get<T>(apiUrl: string, ...args: any[]): Observable<T> {
        const params = new HttpParams();
        args.forEach(q => {
            params.set(Object.keys(q)[0], args[q]);
        });
        console.log(params);

        return this.http.get<T>(`${this.baseUrl}${apiUrl}`, { params });
    }
}