import { Injectable } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';


export class userForm {
  _id!: String;
  firstname!: String;
  lastname!: String;
  email!: String;
  username!: String;
  password!: String;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token:any =[]

  REST_API: string = 'http://localhost:3000/api-user'
  httpHeaders = new HttpHeaders().set('content-Type', 'application/json');

  constructor(private httpClient: HttpClient) { }
  
  //add
  RegisterUser(user: userForm): Observable<any>{
    let API_URL = `${this.REST_API}/register`;
    return this.httpClient.post(API_URL, user)
      .pipe(
        catchError(this.handleError)
      )
  }
  LoginUser(user: { email:string, password:string} ): Observable<any> {
    let API_URL = `${this.REST_API}/login`;
    return this.httpClient.post(API_URL, user, {headers: this.httpHeaders})
      .pipe(
        tap(_res => {
        }),
        catchError(this.handleError)
      )
  }

  LoginSupperUser(user: { email:string, password:string} ): Observable<any> {
    let API_URL = `${this.REST_API}/login`;
    return this.httpClient.post(API_URL, user, {headers: this.httpHeaders})
      .pipe(
        tap(_res => {
        }),
        catchError(this.handleError)
      )
  }


  LogOut() {
    sessionStorage.removeItem('x-access-token');
    localStorage.removeItem('id');
    localStorage.removeItem('username');
  }

  LogIN() {
    return sessionStorage.getItem('x-access-token')!=null;
  }

  
  //show all 
  Getusers() {
    return this.httpClient.get(`${this.REST_API}`);
  }
  //show 
  Getuser(id: any): Observable<any> {
    let API_URL = `${this.REST_API}/show/${id}`;
    return this.httpClient.get(API_URL, { headers: this.httpHeaders})
      .pipe(map((res: any) => {
        return res || {}
      }),
      catchError(this.handleError)
      )
  }
  //update
  Updateuser(id:any, data:any): Observable<any> {
    let API_URL = `${this.REST_API}/update/${id}`;
    return this,this.httpClient.put(API_URL, data, { headers: this.httpHeaders })
      .pipe(
        catchError(this.handleError)
      )
  }
  //delete
  Deleteuser(id:any): Observable<any> {
    let API_URL = `${this.REST_API}/delete/${id}`;
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


