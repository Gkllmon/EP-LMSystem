import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../../../lms_service/user.service';
import { equalValidator } from '../../../../lms_validator/validators';
import { Observable } from 'rxjs/Observable';
import { User } from '../../../../lms_domain/User';

@Component({
  selector: 'ep-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {

  private dataSource: Observable<any>;

  private user: User;

  private formModel: FormGroup;

  constructor(private formBuilder: FormBuilder,
              public userService: UserService,
              public activeRouter: ActivatedRoute,
              public router: Router) {
    this.formModel = formBuilder.group({
      oldpassw: ['oldpassw', Validators.minLength(8)],
      passwordsGroup: formBuilder.group({
        newpassw: ['newpassw', Validators.minLength(8)],
        password: ['newpassw', Validators.minLength(8)]
      }, {validator: equalValidator})
    });
  }

  ngOnInit() {
  }

  onSave() {
    if (this.formModel.valid) {
      if (this.userService.currentUser.password === this.formModel.get('oldpassw').value) {
        this.user = this.userService.currentUser;
        this.user.password = this.formModel.get('passwordsGroup').get('newpassw').value;
        this.dataSource = this.userService.updateUser(this.user);
        this.dataSource.subscribe(
          () => {
            console.log('修改成功');
            this.router.navigate(['../'], {relativeTo: this.activeRouter});
          }
        );
      } else {
        console.log('原密码错误!');
      }
    }
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.activeRouter});
  }

}
