import { Injectable } from '@angular/core';

import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { User } from './user';


@Injectable({
  providedIn: 'root'
})

export class AuthService {
  API_URL: string = 'http://localhost:8000/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser = {};

  constructor(private httpClient: HttpClient,public router: Router){}
	/**
	**  login the user
	**/
  login(user: User) {
    return this.httpClient.post<any>(`${this.API_URL}/users/login`, user)
      .subscribe((res: any) => {
        localStorage.setItem('access_token', res.accessToken)
          this.router.navigate(['add-student']);
      })
  }
	//get the access token
  getAccessToken() {
    return localStorage.getItem('access_token');
  }
// check the user login or not
  isLoggedIn() {
    let authToken = localStorage.getItem('access_token');
    return (authToken !== null) ? true : false;
  }
//log out the user
  logout() {
    if (localStorage.removeItem('access_token') == null) {
      this.router.navigate(['login']);
    }
  }
//handle the errors

  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }
}