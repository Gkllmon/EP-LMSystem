import { Component, OnInit } from '@angular/core';
import { UserService } from '../../lms_service/user.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { User } from '../../lms_domain/User';

@Component({
  selector: 'ep-lmsadmin',
  templateUrl: './lmsadmin.component.html',
  styleUrls: ['./lmsadmin.component.css']
})
export class LmsadminComponent implements OnInit {

  public user: User = null;

  constructor(public userService: UserService,
              private route: ActivatedRoute) {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.userService.getUser(+params.get('id')))
      .subscribe(user => this.user = user);
  }

  ngOnInit() {
  }

  logout() {
    this.userService.isLoggedIn = false;
    this.userService.currentUser = null;
  }
}
