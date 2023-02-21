import { Component, NgZone, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CrudService } from './../../service/crud.service';
import { FormGroup, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-weboard',
  templateUrl: './weboard.component.html',
  styleUrls: ['./weboard.component.css']
})
export class WeboardComponent implements OnInit {

  getId: any;
  showcontentForm: FormGroup;
  addcommentForm:FormGroup;
  showcommentForm: FormGroup;

  constructor(
    public _FormBuilder: FormBuilder,
    //private _router: Router,
    //private _ngZone: NgZone,
    private _activetedRoute: ActivatedRoute,
    private _crudService: CrudService
  ) {
    this.getId = this._activetedRoute.snapshot.paramMap.get('id')

    this.showcontentForm = this._FormBuilder.group({
      description: [''],
      content: [''],
    })

    this.showcommentForm = this._FormBuilder.group({
      comments: ['']
    })

    this.addcommentForm = this._FormBuilder.group({
      comments: ['']
    })

    this._crudService.Getcontent(this.getId).subscribe(res => {
      this.showcontentForm.setValue({
        description: res['description'],
        content: res['content'],
      })
    })

    this._crudService.Getcontent(this.getId).subscribe(res => {
      this.showcommentForm.setValue({
        comments: res['comments']
      })
    })
  }

  ngOnInit(): void {
  }

  onAddComment(): void {
  const comment = this.addcommentForm.value.comments;
  this._crudService.AddComment(this.getId, comment).subscribe(res => {
    console.log('Comment added successfully:', res);
    window.location.reload();
  }, err => {
    console.error('Failed to add comment:', err);
  });
}
  
}
