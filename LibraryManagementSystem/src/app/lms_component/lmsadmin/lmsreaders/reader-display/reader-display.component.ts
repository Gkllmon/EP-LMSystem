import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../lms_service/user.service';
import { User } from '../../../../lms_domain/User';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'ep-reader-display',
  templateUrl: './reader-display.component.html',
  styleUrls: ['./reader-display.component.css']
})
export class ReaderDisplayComponent implements OnInit {

  private dataSource: Observable<any>;

  private readers: User[] = [];

  constructor(public userService: UserService) {
    this.dataSource = this.userService.getReaders();
    this.dataSource.subscribe((data) => this.readers = data);
  }

  ngOnInit() {
  }

  onDelete(id: number) {
    this.dataSource = this.userService.deleteUser(id);
    this.dataSource.subscribe(
      () => {
        this.readers = this.readers.filter(reader => reader.userId !== id);
      },
      () => {
        console.log('错误');
      }
    );
  }
}
