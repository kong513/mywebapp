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
 getid: any;
 showprofileForm: FormGroup;

  constructor(
    public _FormBuilder: FormBuilder,
    private _activetedRoute: ActivatedRoute,
    private _auth: AuthService
  )
  {
    this.getid = this._activetedRoute.snapshot.paramMap.get('id')

    this._auth.Getuser(this.getid).subscribe(res => {
      this.showprofileForm.setValue({
        firstname: res['firstname'],
        lastname: res['lastname'],
        email: res['email'],
        username: res['username'],
        password: [''],
      })
    })

    this.showprofileForm = this._FormBuilder.group({
      firstname: [''],
      lastname: [''],
      email: [''],
      username: [''],
      password: [''],
      //confirm_password: [''],
    })
  }
  ngOnInit(): void {
    
  }
  onChangeprofile(): any {
    this._auth.Updateuser(this.getid , this.showprofileForm.value).subscribe(() => {
      console.log('change seccess')
      window.alert('change seccess')
    }, (err) => {
      console.log(err)
    })
  }
  
}
