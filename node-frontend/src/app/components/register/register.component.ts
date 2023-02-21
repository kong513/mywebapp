import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthService } from './../../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registationForm:FormGroup

  constructor(
    public _formBuilder: FormBuilder,
    private _authService: AuthService,
    private _ngzone: NgZone,
    private _router: Router) 
    {
      this.registationForm = this._formBuilder.group({
        firstname:[''],
        lastname:[''],
        email: [''],
        username: [''],
        password: ['']
      })
    }
  
  ngOnInit(): void {
    
  }

  onregisterUser() {
    this._authService.RegisterUser(this.registationForm.value)
      .subscribe(
        res => {
          console.log(res)
          //localStorage.setItem('token', res.token)
          this._ngzone.run(() => this._router.navigateByUrl('/login'))
        },
        err => console.log(err)
      )
  }
}


    
