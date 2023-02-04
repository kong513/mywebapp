import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  getToken() {
    throw new Error('Method not implemented')
  }

  private _registerUrl = ""
  private _loginUrl = ""

  constructor() { }


}
