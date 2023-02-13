import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../../service/auth.service';
//import { CrudService } from 'src/app/service/crud.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginUserData:any = {}
  

  constructor(
    private _auth: AuthService,
    private _router: Router) {}

  ngOnInit(): void {
    
  }
  loginUser() {
    this._auth.loginUser(this.loginUserData)
    .subscribe(
      res => {
        console.log(res)
        localStorage.setItem('token', res.token)
        this._router.navigate(['/weborad'])
      },
      err => console.log
    )

  }

}
