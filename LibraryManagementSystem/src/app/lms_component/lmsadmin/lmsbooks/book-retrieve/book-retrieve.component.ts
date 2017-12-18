import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { BookService } from '../../../../lms_service/book.service';
import { Book } from '../../../../lms_domain/Book';

@Component({
  selector: 'ep-book-retrieve',
  templateUrl: './book-retrieve.component.html',
  styleUrls: ['./book-retrieve.component.css']
})
export class BookRetrieveComponent implements OnInit {

  private dataSource: Observable<any>;

  private books: Book[] = [];

  formModel: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private bookService: BookService,
              private router: Router) {
    this.formModel = formBuilder.group({bookname: ['图书', Validators.required]});
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.formModel.valid) {
      this.dataSource = this.bookService.getBooksByName(this.formModel.get('bookname').value)
        .do(books => this.books = books);
      this.dataSource.subscribe(
        () => {
          if (this.books.length !== 0) {
            this.router.navigate(['./mbooks', this.formModel.get('bookname').value]);
          } else {
            console.log('查无此书');
          }
        }
      );
    }
  }
}
