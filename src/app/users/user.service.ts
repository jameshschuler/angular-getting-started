import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User, SearchResponse} from './models/user';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators'

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private usersUrl = `https://randomuser.me/api/?results=25`;

    constructor(private http: HttpClient) {

    }

    getUsers() : Observable<SearchResponse> {
        return this.http.get<SearchResponse>(this.usersUrl)
        .pipe(tap(data => console.log(`Fetched Data`)), catchError(this.handleError));
    }

    private handleError(err: HttpErrorResponse) {
        let errorMessage = '';
        if(err.error instanceof ErrorEvent) {
            errorMessage = `An error occurred: ${err.error.message}`;
        } else {
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        return throwError(errorMessage);
    }
}