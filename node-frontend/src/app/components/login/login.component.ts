import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { CrudService } from 'src/app/service/crud.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  lEmail:string = "";
  lPassword:string = "";

  constructor(
    private Auth: AuthService,
    private crudService: CrudService) {}

  ngOnInit(): void {
    
  }
  onSubmit(): any {
    if (this.lEmail == "Aimpree04478@gmail.com" && this.lPassword == "1234"){
      window.alert("login success")
    }
    else{
      window.alert("login failed")
    }

  }

}
