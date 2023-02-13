import { Component, OnInit } from '@angular/core';
import { CrudService } from './../../service/crud.service';


@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit {

  content_list:any = [];

  constructor(private crudService: CrudService) {}

  ngOnInit(): void {
    this.crudService.Getcontents().subscribe(res => {
      console.log(res)
      this.content_list = res;
    })
  }

}
