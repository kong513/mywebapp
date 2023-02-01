import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

export class Userform {
  _id!: String;
  Email!: String;
  Username!: String;
  Password!: String;
}

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  REST_API: string = 'http://localhost:8000/api'

  httpHeaders = new HttpHeaders().set('content-Type', 'application/json');

  constructor(private httpClient: HttpClient) { }
  
  //addid
  AddUser(data: Userform): Observable<any>{
    let API_URL = `${this.REST_API}/register-user`;
    return this.httpClient.post(API_URL, data)
      .pipe(
        catchError(this.handleError)
      )
  }
  //show all user
  GetUsers() {
    return this.httpClient.get(`${this.REST_API}`);
  }
  //show user
  GetUser(id: any): Observable<any> {
    let API_URL = `${this.REST_API}/show-user/${id}`;
    return this.httpClient.get(API_URL, { headers: this.httpHeaders})
      .pipe(map((res: any) => {
        return res || {}
      }),
      catchError(this.handleError)
      )
  }
  //update
  UpdateUser(id:any, data:any): Observable<any> {
    let API_URL = `${this.REST_API}/update-user/${id}`;
    return this,this.httpClient.put(API_URL, data, { headers: this.httpHeaders })
      .pipe(
        catchError(this.handleError)
      )
  }
  //delete
  DeleteUser(id:any): Observable<any> {
    let API_URL = `${this.REST_API}/delete-user/${id}`;
    return this.httpClient.delete(API_URL, {headers: this.httpHeaders})
      .pipe(
        catchError(this.handleError)
      )
        
      

  }




  //error
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      //handle client
      errorMessage = error.error.message;
    }
    else {
      //server error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;

    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}


