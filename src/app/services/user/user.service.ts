import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

    private host = 'http://localhost:8080/api/user';
    private userUrl = this.host;
    private managerUrl = this.host + '/manger';
    private adminUrl = this.host + '/admin';

  constructor( private http: HttpClient) { }

  getUserBoard(): Observable<any> {
    return this.http.get(this.userUrl);
  }

  getMangerBoard(): Observable<any> {
    return this.http.get(this.managerUrl);
  }
  getAdminBoard(): Observable<any> {
    return this.http.get(this.adminUrl);
  }




}
