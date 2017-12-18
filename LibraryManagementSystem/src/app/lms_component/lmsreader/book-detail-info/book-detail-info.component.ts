import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../lms_service/user.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Book } from '../../../lms_domain/Book';
import { BookService } from '../../../lms_service/book.service';

@Component({
  selector: 'app-book-detail-info',
  templateUrl: './book-detail-info.component.html',
  styleUrls: ['./book-detail-info.component.css']
})
export class BookDetailInfoComponent implements OnInit {

  private book: Book;

  constructor(private userService: UserService,
              private bookService: BookService,
              private activeRouter: ActivatedRoute,
              private router: Router) {
    this.activeRouter.paramMap
      .switchMap((params: ParamMap) => this.bookService.getBook(+params.get('bookId')).do(book => this.book = book))
      .subscribe(
        () => {
        },
        () => {
        },
        () => {
          console.log('1151213131313');
        });
  }

  ngOnInit() {
  }
}
