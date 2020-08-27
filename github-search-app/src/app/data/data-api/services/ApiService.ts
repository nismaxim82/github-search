import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '@env';

@Injectable()
export class ApiService {
    private baseUrl = `${environment.serverApiUrl}/api`;

    constructor(private http: HttpClient) { }

    public get<T>(apiUrl: string, queryParams: any = null): Observable<T> {
        let params = new HttpParams();
        if (queryParams) {
            Object.keys(queryParams).forEach((k: string) => {
                params = params.set(k, queryParams[k]);
            });
        }

        const endPoint = `${this.baseUrl}${apiUrl}`;

        return this.http.get<T>(endPoint, { params, withCredentials: true })
            .pipe(
                tap(_ => console.log(`Get ${endPoint} with params ${JSON.stringify(queryParams)}`)),
                catchError(this.handleError<T>('getBookmarks', []))
            );
    }

    public post<T>(apiUrl: string, item: T): Observable<any> {
        const body = item;

        const endPoint = `${this.baseUrl}${apiUrl}`;

        return this.http.post(endPoint, body, { withCredentials: true })
            .pipe(
                tap(_ => console.log(`Post ${endPoint} with body ${JSON.stringify(body)}`)),
                catchError(this.handleError<T>('postBookmark', null))
            );
    }

    public delete<T>(apiUrl: string, id: number): Observable<any> {
        const endPoint = `${this.baseUrl}${apiUrl}/${id}`;

        return this.http.delete(endPoint, { withCredentials: true })
            .pipe(
                tap(_ => console.log(`Delete ${endPoint} by id ${id}`)),
                catchError(this.handleError<T>('deleteBookmark', null))
            );
    }

    private handleError<T>(operation = 'operation', result?: T | T[]) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            //   this.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }
}