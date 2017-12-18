import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras, Router} from '@angular/router';
import { UserService } from '../../../lms_service/user.service';

@Component({
  selector: 'ep-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private dataSource: Observable<any>;

  private formModel: FormGroup;

  private currentUrl: string;

  constructor(private formBuilder: FormBuilder,
              public userService: UserService,
              public router: Router) {
    this.formModel = formBuilder.group({
      username: ['2017218023', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(12)])],
      password: ['1234567890', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(12)])]
    });
  }

  ngOnInit() {
  }

  // 登录
  login() {
    if (this.formModel.valid) {
      this.dataSource = this.userService.getUser(this.formModel.get('username').value);
      this.dataSource.subscribe(
        () => {
          if (this.userService.currentUser !== null) {
            if (this.formModel.get('password').value === this.userService.currentUser.password) {
              this.userService.isLoggedIn = true;
            } else {
              console.log('密码错误！');
            }
            if (this.userService.isLoggedIn) {
              // 从auth服务获取Url，若没有使用默认路径
              this.currentUrl = this.userService.redirectUrl ? this.userService.redirectUrl : '/lms' + this.userService.currentUser.type;
              // Set our navigation extras object
              // that passes on our global query params and fragment
              const navigationExtras: NavigationExtras = {
                queryParamsHandling: 'preserve',
                preserveFragment: true
              };
              // Redirect the user
              this.router.navigate([this.currentUrl, this.userService.currentUser.userId], navigationExtras);
            }
          } else {
            console.log('当前账号不存在或者用户名错误！');
          }

        }
      );
    }
  }

  // 登出
  logout() {
    this.userService.isLoggedIn = false;
    this.userService.currentUser = null;
  }

}
