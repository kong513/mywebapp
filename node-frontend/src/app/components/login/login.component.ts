import { Component, OnInit, NgZone } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms'
import { AuthService } from './../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;

  constructor(
    private _http: HttpClient,
    public _formBuilder: FormBuilder,
    private _router: Router,
    private _ngzone: NgZone,
    private _authService: AuthService)
    {
      this.loginForm = this._formBuilder.group({
        email:[''],
        password:[''],
        
      })
    }

  ngOnInit(): void {
    
  }             
  onLoginuser() {
    this._authService.LoginUser(this.loginForm.value)
      .subscribe(
        res => {
          console.log(res)
          sessionStorage.setItem('x-access-token', res.token)
          localStorage.setItem('x-access-token', res.token)
          this._ngzone.run(() => this._router.navigateByUrl('/weboard'))
        },
        err => console.log(err)
      )
  }
  
}
