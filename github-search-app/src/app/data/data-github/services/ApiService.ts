import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class ApiService {
    private baseUrl = 'https://api.github.com';

    constructor(private http: HttpClient) { }

    public get<T>(apiUrl: string, queryParams: any): Observable<T> {
        let params = new HttpParams();
        Object.keys(queryParams).forEach((k: string) => {
            params = params.set(k, queryParams[k]);
        });

        const endPoint = `${this.baseUrl}${apiUrl}`;

        return this.http.get<T>(endPoint, { params })
            .pipe(
                tap(_ => console.log(`Get ${endPoint} with params ${JSON.stringify(queryParams)}`)),
                catchError(this.handleError<T>('getHeroes', { items: {} } as any))
            );
    }

    private handleError<T>(operation = 'operation', result?: T) {
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