import { Component, OnInit } from '@angular/core';
import { User } from '../../../lms_domain/User';
import { UserService } from '../../../lms_service/user.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private user: User;

  constructor(private userService: UserService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.userService.getUser(+params.get('id')))
      .subscribe(user => this.user = user);
  }

  onLogout() {
    this.userService.isLoggedIn = false;
    this.userService.currentUser = null;
  }

}
