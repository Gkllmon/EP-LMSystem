import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Headers, Http } from '@angular/http';
import { User } from '../lms_domain/User';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class UserService {
  // 登录状态，true成功，false失败
  public isLoggedIn = false;
  // 保存Url,登录之后能导航到
  public redirectUrl: string;
  // 当前登录用户
  public currentUser: User = null;
  // 读者列表
  public readers: User[] = [];
  // web url
  private userUrl = '/api/users';

  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {
  }

  // 通过ID得到当前使用者
  public getUser(id: number): Observable<User> {
    const url = `${this.userUrl}/${id}`;
    return this.http.get(url)
      .map(response => response.json() as User)
      .do((data) => this.currentUser = data);
  }

  // 得到一个读者
  public getReader(id: number): Observable<User> {
    const url = `${this.userUrl}/${id}`;
    return this.http.get(url)
      .map(response => response.json() as User);
  }

  // 得到全部读者
  public getReaders(): Observable<User[]> {
    return this.http.get(this.userUrl)
      .map(response => response.json() as User[])
      .do((data) => this.readers = data);
  }

  // 创建一个使用者
  public createUser(user: User): Observable<User> {
    return this.http
      .post(this.userUrl, JSON.stringify(user), {headers: this.headers})
      .map(response => response.json() as User);
  }

  // 通过ID删除使用者
  public deleteUser(id: number): Observable<void> {
    const url = `${this.userUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .map(() => null);
  }

  // 通过ID更新使用者
  public updateUser(user: User): Observable<User> {
    const url = `${this.userUrl}/${user.userId}`;
    return this.http
      .put(url, JSON.stringify(user), {headers: this.headers})
      .map(() => user);
  }

}
