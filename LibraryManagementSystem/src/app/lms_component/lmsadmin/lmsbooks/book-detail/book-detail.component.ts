import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { BookService } from '../../../../lms_service/book.service';
import { Book } from '../../../../lms_domain/Book';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'ep-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  private dataSource: Observable<any>;

  private newSource: Observable<any>;

  private book: Book;

  formModel: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private activeRouter: ActivatedRoute,
              private router: Router,
              private bookService: BookService) {

    this.activeRouter.paramMap
      .switchMap((params: ParamMap) => this.bookService.getBook(+params.get('id')).do(book => this.book = book))
      .subscribe(
        () => {
        },
        () => {
        },
        () => {
          console.log(this.book.id);
        }
      );

    this.formModel = formBuilder.group({
      bookid: ['id', Validators.required],
      bookname: ['name', Validators.required],
      booktype: ['type', Validators.required],
      bookprice: ['price', Validators.required],
      bookauthor: ['author', Validators.required],
      bookcencern: ['cencern', Validators.required],
      bookborrowSum: ['borrowSum', Validators.required]
    });
  }

  ngOnInit() {
  }

  onSave() {
    if (this.formModel.valid) {
      this.dataSource = this.bookService.getBook(this.formModel.get('bookid').value);
      this.dataSource.subscribe(
        () => {
          console.log('账号已存在!');
          this.book.id = this.formModel.get('bookid').value;
          this.book.name = this.formModel.get('bookname').value;
          this.book.type = this.formModel.get('booktype').value;
          this.book.price = this.formModel.get('bookprice').value;
          this.book.author = this.formModel.get('bookauthor').value;
          this.book.cencern = this.formModel.get('bookcencern').value;
          this.book.borrowSum = this.formModel.get('bookborrowSum').value;

          console.log(this.book);
          this.newSource = this.bookService.updateBook(this.book);
          this.newSource.subscribe(
            () => {
              console.log('修改成功!');
            },
            () => {
            },
            () => {
              this.router.navigate(['../../'], {relativeTo: this.activeRouter});
            }
          );
        },
        () => {
          this.book.id = this.formModel.get('bookid').value;
          this.book.name = this.formModel.get('bookname').value;
          this.book.type = this.formModel.get('booktype').value;
          this.book.price = this.formModel.get('bookprice').value;
          this.book.author = this.formModel.get('bookauthor').value;
          this.book.cencern = this.formModel.get('bookcencern').value;
          this.book.borrowSum = this.formModel.get('bookborrowSum').value;
          console.log(this.book.id);
          this.newSource = this.bookService.createBook(this.book);
          this.newSource.subscribe(
            () => {
              console.log('注册成功!');
              this.router.navigate(['../../'], {relativeTo: this.activeRouter});
            }
          );
        }
      );
    }
  }

  onCancel() {
    this.router.navigate(['../../'], {relativeTo: this.activeRouter});
  }

  onSubmit() {
    this.router.navigate(['/manage']);
  }

}
