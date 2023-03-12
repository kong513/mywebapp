import { Component, NgZone, OnInit} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from './../../service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  
  loginID:any = [];
  loginUsername:any = [];
  //showloginID:FormGroup;
  

  constructor(
    public _formBuilder: FormBuilder,
    private _router: Router,
    private _ngzone: NgZone,
    private _authService: AuthService,
    private _activatedRoute: ActivatedRoute
  )
    { 
      //this.loginID = this._activatedRoute.snapshot.paramMap.get('id')

      /*this.loginID = this._formBuilder.group({
        username:['']
      })

      this._authService.Getuser(this.loginID).subscribe(res => {
        this.loginID.setValue({
          username:res['username']
        })
      })*/
    }

  ngOnInit(): void {
    this.loginID = localStorage.getItem('id')
    this.loginUsername = localStorage.getItem('username')
  }             
  onLogOutuser() {
    this._authService.LogOut()
  }
}
