import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    let body = new HttpParams();
    body = body.set('username', username);
    body = body.set('password', password);

    let myheaders = new HttpHeaders();
    myheaders = myheaders.set('Authorization', 'Basic ' + btoa('frontend:secret'));

    return this.http.get('http://localhost:8088/login', {headers: myheaders, params: body});
  }
}
