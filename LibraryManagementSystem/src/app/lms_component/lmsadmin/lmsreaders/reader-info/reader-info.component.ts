import { Component, OnInit } from '@angular/core';
import { User } from '../../../../lms_domain/User';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {UserService} from "../../../../lms_service/user.service";

@Component({
  selector: 'ep-reader-info',
  templateUrl: './reader-info.component.html',
  styleUrls: ['./reader-info.component.css']
})
export class ReaderInfoComponent implements OnInit {

  private reader: User;

  constructor(private activeRouter: ActivatedRoute,
              private router: Router,
              private userService: UserService) {
  }

  ngOnInit() {
    this.activeRouter.paramMap
      .switchMap((params: ParamMap) => this.userService.getReader(+params.get('readerid')))
      .subscribe(
        reader => this.reader = reader,
        () => {
        },
        () => {
          console.log('1151213131313');
        });
  }

}
