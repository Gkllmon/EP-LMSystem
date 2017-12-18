import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Book } from '../../../../lms_domain/Book';
import { BookService } from '../../../../lms_service/book.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import {UserService} from "../../../../lms_service/user.service";

@Component({
  selector: 'ep-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  info: Array<Object>;
  private dataSource: Observable<any>;
  // 检索词
  private keyWord: string;
  // 判断是否位管理员
  private isAdmin: boolean;
  // 检索条数
  private resultCount: number;
  // 书信息
  private books: Book[] = [];

  constructor(private bookService: BookService,
              private userService: UserService,
              private activeRouter: ActivatedRoute,
              private router: Router) {
    this.activeRouter.paramMap
      .switchMap((params: ParamMap) => this.bookService.getBooksByName(params.get('name'))
        .do((books) => {
          this.keyWord = params.get('name');
          this.books = books;
          this.resultCount = this.books.length;
        }))
      .subscribe(
        books => this.books = books,
        () => {
        },
        () => {
        });
  }

  ngOnInit() {
  }

  onDelete(id: number) {
    this.dataSource = this.bookService.deleteBook(id);
    this.dataSource.subscribe(
      () => {
        this.books = this.books.filter(book => book.id !== id);
      },
      () => {
        console.log('错误');
      }
    );
  }
}
