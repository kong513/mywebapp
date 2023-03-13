import { Component, NgZone, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CrudService } from './../../service/crud.service';
import { FormGroup, FormBuilder,Validators } from '@angular/forms'

@Component({
  selector: 'app-weboard',
  templateUrl: './weboard.component.html',
  styleUrls: ['./weboard.component.css']
})
export class WeboardComponent implements OnInit {

  head:any =[];
  user: any =[];
  getId: any;
  showcontentForm: FormGroup;
  addcommentForm:FormGroup;
  showcommentForm: FormGroup;

  constructor(
    public _FormBuilder: FormBuilder,
    private _router: Router,
    private _ngZone: NgZone,
    private _activetedRoute: ActivatedRoute,
    private _crudService: CrudService,
  ) 
    {
    this.getId = this._activetedRoute.snapshot.paramMap.get('id')

    this.showcontentForm = this._FormBuilder.group({
      description: [''],
      content: [''],
    })

    this.showcommentForm = this._FormBuilder.group({
      //user: [''],
      comments: [''],
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
    /*this.user = localStorage.getItem('username')
    this.showcommentForm = this._FormBuilder.group({
      comments: {user:[this.user]}
    })*/
    
  }

  onAddComment(): void {
    const comment = this.addcommentForm.value.comments;
    if (comment.trim() === '') {
      window.alert('cant add empty comment')
      return;
    }
    this._crudService.AddComment(this.getId, comment).subscribe(res => {
      console.log('Comment added successfully:', res);
      window.location.reload();
    }, err => {
      console.error('Failed to add comment:', err);
    });
  }

  ondelete(): void {
  let thisUser = String(localStorage.getItem('id'))
  console.log(thisUser)

  this._crudService.Getcontent(this.getId).subscribe(res => {
    let contentOwner = res['user_id'];
    this.showcontentForm.patchValue({
      user_id : contentOwner
    });
    console.log(contentOwner);

    if (thisUser == contentOwner) {
      this._crudService.Deletecontent(this.getId).subscribe(res => {
        console.log('delete success')
        this._ngZone.run(() => this._router.navigateByUrl('/list-content'))
      });
    } else {
      console.log('cant delete')
      window.alert('You not owner of this content')
    }
  });
}
  
}
