import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from './../../service/auth.service';
import { FormGroup, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
 getEmail: any;
 showprofileForm: FormGroup;

  constructor(
    public _FormBuilder: FormBuilder,
    private _activetedRoute: ActivatedRoute,
    private _auth: AuthService
  )
  {
    this.getEmail = this._activetedRoute.snapshot.paramMap.get('id')

    this._auth.Getuser(this.getEmail).subscribe(res => {
      this.showprofileForm.setValue({
        firstname: res['firstname'],
        lastname: res['lastname'],
        email: res['email'],
        username: res['username'],
        //password: res['password'],
      })
    })

    this.showprofileForm = this._FormBuilder.group({
      firstname: [''],
      lastname: [''],
      email: [''],
      username: [''],
      //password: [''],
    })
  }
  ngOnInit(): void {
    
  }
}
