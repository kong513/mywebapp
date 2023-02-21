import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
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

  REST_API: string = 'http://localhost:3000/api-user'

  httpHeaders = new HttpHeaders({'content-Type': 'application/json'});

  constructor(private httpClient: HttpClient) { }
  
  //add
  RegisterUser(data: userForm): Observable<any>{
    let API_URL = `${this.REST_API}/register`;
    return this.httpClient.post(API_URL, data)
      .pipe(
        catchError(this.handleError)
      )
  }
  LoginUser(data: any): Observable<any> {
    let API_URL = `${this.REST_API}/login`;
    return this.httpClient.post(API_URL, data, {headers: this.httpHeaders})
      .pipe(
        catchError(this.handleError)
      )
        
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


