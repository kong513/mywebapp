import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from './../../service/crud.service';
import { FormGroup, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-create-content-board',
  templateUrl: './create-content-board.component.html',
  styleUrls: ['./create-content-board.component.css']
})
export class CreateContentBoardComponent implements OnInit {


  contentForm: FormGroup;

  constructor(
    public _formBuilder: FormBuilder,
    private _router: Router,
    private _ngZone: NgZone,
    private _crudService: CrudService) 
    {
      this.contentForm = this._formBuilder.group({
        content_name: [''],
        description: [''],
        content: ['']
      })
    }

  ngOnInit(): void {
    
  }
  onSubmit(): any{
    this._crudService.Addcontents(this.contentForm.value)
    .subscribe(() => {
      console.log("create new content name");
      this._ngZone.run(() => this._router.navigateByUrl('/list-content'))
    }, (err) => {
      console.log(err);
    }) 
  }
 
}