import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../lms_service/user.service';
import { Observable } from 'rxjs/Observable';
import { BookService } from '../../../lms_service/book.service';
import { Book } from '../../../lms_domain/Book';

@Component({
  selector: 'app-borrow-select',
  templateUrl: './borrow-select.component.html',
  styleUrls: ['./borrow-select.component.css']
})
export class BorrowSelectComponent implements OnInit {

  private dataSource: Observable<any>;

  private newSource: Observable<any>;

  private book: Book;

  constructor(private userService: UserService,
              private bookService: BookService) {
  }

  ngOnInit() {
  }

  onRestore(id: number) {
    this.bookService.getBook(id).do((book) => this.book = book)
      .subscribe(
        () => {
          const time = new Date(this.book.endTime);
          time.setMonth(time.getMonth() + 1);
          this.book.endTime = time;
          this.bookService.updateBook(this.book).subscribe(
            () => {
            },
            () => {
            },
            () => {
              this.userService.getUser(this.userService.currentUser.userId).subscribe();
            }
          );
        }
      );
  }
}
