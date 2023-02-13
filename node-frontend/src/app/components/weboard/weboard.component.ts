import { Component, NgZone, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CrudService } from './../../service/crud.service';
import { FormGroup, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-weboard',
  templateUrl: './weboard.component.html',
  styleUrls: ['./weboard.component.css']
})
export class WeboardComponent implements OnInit{

  getId: any;
  shownewcontentForm:any;

  addnewcontetnForm:FormGroup;
  showcontentForm: FormGroup;
  

  constructor(
    public _FormBuilder: FormBuilder,
    private _router: Router,
    private _ngZone: NgZone,
    private _activetedRoute: ActivatedRoute,
    private _crudService: CrudService
    )
    {
        this.getId = this._activetedRoute.snapshot.paramMap.get('id')
        this._crudService.Getcontent(this.getId).subscribe(res => {
          this.showcontentForm.setValue({
            description: res['description'],
            content: res['content']
          })
        })

        this.showcontentForm = this._FormBuilder.group({
          description: [''],
          content: ['']
        })
        this.addnewcontetnForm = this._FormBuilder.group({
          description: [''],
          content: ['']
        })
    }

  ngOnInit(): void {
    //this._crudService.Getcontent(this.getId).subscribe(res => {
      //console.log(res)
      //this.shownewcontentForm = res;
    }//)
    //this._crudService.Getcontent(this.getId).subscribe(res => {
      //console.log(res)
      //this.showcontentForm = res;
    //})
  
  onSubmit(): any{
    this._ngZone.run(() => this._router.navigateByUrl('/weboard-addon-content'))
  }
    //this._crudService.Addcontents(this.addnewcontetnForm.value).subscribe(() => {
      //console.log("create new content name");
      //this._ngZone.run(() => this.getId)
    
  //}
  //onUpdate(): any {
    //this._crudService.Updatecontent(this.getId, this.showcontentForm.value).subscribe(() => {
      //console.log('update ok')
      //this._ngZone.run(() => this._router.navigateByUrl('list-content'))
    //})
  //}
 //}

}
