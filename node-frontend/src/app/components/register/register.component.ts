import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from './../../service/crud.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userform: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private crudService: CrudService
  ) {
    this.userform = this.formBuilder.group({
      Email: [''],
      Username: [''],
      Password: ['']/*, [Validators.required]],*/
      /*Confirm_password: [''], [Validators.required]]*/
    /*} /** *,{
      Validators: ConfirmedValidator('Password', 'Confirm_password')
    */})
  }
  ngOnInit(): void {
    
  }
  onSubmit(): any{
    this.crudService.AddUser(this.userform.value)
    .subscribe(() => {
      console.log("USER ADD");
      this.ngZone.run(() => this.router.navigateByUrl('/login'))
    }, (err) => {
      console.log(err);
    }) 
  }
}
    
/**export function ConfirmedValidator(controlName: string, matchingControlName: string){
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors) {
            return;
        }
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ confirmedValidator: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
}*/
