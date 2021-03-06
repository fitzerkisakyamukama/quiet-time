import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { JwtResponse } from '../../models/auth/jwt-response';
import { LoginInfo } from '../../models/user/login-info';
import { SignUpInfo } from '../../models/user/signup-info';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  // private  host = 'http://localhost:8080/api/auth/';
  private host = 'https://quiet-time-backend.herokuapp.com/api/auth/';
  private loginUrl = this.host + 'signin';
  private signUpUrl = this.host + 'signup';


  constructor(private http: HttpClient) { }

  attemptAuth(credentials: LoginInfo): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(this.loginUrl, credentials, httpOptions);
  }

  signUp(info: SignUpInfo): Observable<string> {
    return this.http.post<string>(this.signUpUrl, info, httpOptions);
  }
}
