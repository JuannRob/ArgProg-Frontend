import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  URL_BASE:string = `https://myportfolio-argprog.herokuapp.com`;

  constructor(private http:HttpClient) { }


  getUserData():Observable<any>{
    return this.http.get(`${this.URL_BASE}/personas/1/`)
  }

  getUserUbication():Observable<any>{
    return this.http.get(`${this.URL_BASE}/personas/1/ubicacion`)
  }

  saveUser(user:any){
    this.http.post(`${this.URL_BASE}/personas`, user).subscribe((result) => {
      console.warn('result: ', result)
    })
  }

  
}
