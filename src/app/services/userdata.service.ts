import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor(private http:HttpClient) { }

  getUserData():Observable<any>{
    return this.http.get('https://myportfolio-argprog.herokuapp.com/personas/1')
  }

  getUserUbication():Observable<any>{
    return this.http.get('https://myportfolio-argprog.herokuapp.com/personas/1/ubicacion')
  }
}
