import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

export class contentForm {
  _id!: String;
  content_name!: String;
  description!: String;
  content!: String;
  comments!: String[];
}

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  REST_API: string = 'http://localhost:3000/api'

  httpHeaders = new HttpHeaders().set('content-Type', 'application/json');

  constructor(private httpClient: HttpClient) { }
  
  //add
  Addcontents(data: contentForm): Observable<any>{
    let API_URL = `${this.REST_API}/add`;
    return this.httpClient.post(API_URL, data)
      .pipe(
        catchError(this.handleError)
      )
  }

  
  //show all 
  Getcontents() {
    return this.httpClient.get(`${this.REST_API}`);
  }
  //show 
  Getcontent(id: any): Observable<any> {
    let API_URL = `${this.REST_API}/show/${id}`;
    return this.httpClient.get(API_URL, { headers: this.httpHeaders})
      .pipe(map((res: any) => {
        return res || {}
      }),
      catchError(this.handleError)
      )
  }
  //update
  Updatecontent(id:any, data:any): Observable<any> {
    let API_URL = `${this.REST_API}/update/${id}`;
    return this,this.httpClient.put(API_URL, data, { headers: this.httpHeaders })
      .pipe(
        catchError(this.handleError)
      )
  }
  //delete
  Deletecontent(id:any): Observable<any> {
    let API_URL = `${this.REST_API}/delete/${id}`;
    return this.httpClient.delete(API_URL, {headers: this.httpHeaders})
      .pipe(
        catchError(this.handleError)
      )
        
  }

  AddComment(id: any, comments: any): Observable<any> {
    let API_URL = `${this.REST_API}/addcomment/${id}`;
    return this.httpClient.post(API_URL, { comments }, { headers: this.httpHeaders })
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


