import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export type library = 'material' | 'bootstrap';

@Injectable({
    providedIn: 'root'
})
export class AppService {
    currentLibrary: library = 'bootstrap';

    execChangeLibrary: Subject<library> = new Subject<library>();

    /**
     * Use to change client library 
     * @data type: library
     */
    libraryChange(data: library) {
        this.currentLibrary = data;
        this.execChangeLibrary.next(data);
    }
}