import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';


@Component({
  selector: 'ep-book-manage',
  templateUrl: './book-manage.component.html',
  styleUrls: ['./book-manage.component.css']
})
export class BookManageComponent implements OnInit {

  formModel: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private activeRouter: ActivatedRoute) {
    this.formModel = formBuilder.group({
      bookname: ['图书']
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    // 得到书的名字
    this.router.navigate(['./mbooks', this.formModel.get('bookname').value], {relativeTo: this.activeRouter});
  }

  OnInsert() {
    this.router.navigate(['./mdetail', 1000], {relativeTo: this.activeRouter});
  }

}
