import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { CrudService } from './../../service/crud.service';
//import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthService } from './../../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerUserData:any = {}

  constructor(
    private _aunt: AuthService,
    private _router: Router) {}
  
  ngOnInit(): void {
    
  }

  registerUser() {
    this._aunt.registerUser(this.registerUserData)
      .subscribe(
        res => {
          console.log(res)
          localStorage.setItem('token', res.token)
          this._router.navigate(['/login'])
        },
        err => console.log(err)
      )
  }
}


    
