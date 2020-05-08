import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable()
export class AuthService {

  private _registerUrl = "http://uls.wappzo.com/api/signup";
  private _loginUrl = "http://uls.wappzo.com/api/login";

  constructor(private http: HttpClient,
              private _router: Router) { }

  registerUser(user) {
    console.log(user)
    return this.http.post<any>(this._registerUrl, user)
  }

  loginUser(user) {
    console.log(user)
    return this.http.post<any>(this._loginUrl, user)
  }


}
