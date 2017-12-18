import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Headers, Http } from '@angular/http';
import { Book } from '../lms_domain/Book';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class BookService {
  // web url
  private bookUrl = '/api/books';
  // 请求头
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {
  }

  // 通过图书名获取图书
  public getBooksByName(name: string): Observable<Book[]> {
    const url = `${this.bookUrl}/${name}`;
    return this.http.get(url)
      .map(response => response.json() as Book[]);
  }

  // 通过ID得到图书
  public getBook(id: number): Observable<Book> {
    const url = `${this.bookUrl}/id/${id}`;
    return this.http.get(url)
      .map(response => response.json() as Book);
  }

  // 得到全部的图书
  public getBooks(): Observable<Book[]> {
    return this.http.get(this.bookUrl)
      .map(response => response.json() as Book[]);
  }

  // 创建一个图书
  public createBook(book: Book): Observable<Book> {
    return this.http
      .post(this.bookUrl, JSON.stringify(book), {headers: this.headers})
      .map(response => response.json() as Book);
  }

  // 通过ID删除图书
  public deleteBook(id: number): Observable<void> {
    const url = `${this.bookUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .map(() => null);
  }

  // 通过ID更新图书
  public updateBook(book: Book): Observable<Book> {
    const url = `${this.bookUrl}/${book.id}`;
    return this.http
      .put(url, JSON.stringify(book), {headers: this.headers})
      .map(() => book);
  }

}
