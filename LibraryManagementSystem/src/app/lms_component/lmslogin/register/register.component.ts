import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserService } from '../../../lms_service/user.service';
import { User } from '../../../lms_domain/User';
import { ageValidator, emailValidator, mobileValidator, sexValidator } from '../../../lms_validator/validators';

@Component({
  selector: 'ep-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  private dataSource: Observable<any>;

  private newSource: Observable<any>;

  private formModel: FormGroup;

  private user: User = new User();

  constructor(private formBuilder: FormBuilder,
              public userService: UserService,
              public router: Router) {
    this.formModel = formBuilder.group({
      readerid: ['2017218023', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(12)])],
      readersex: ['男', Validators.compose([Validators.required, sexValidator])],
      readerage: ['23', Validators.compose([Validators.required, ageValidator])],
      readername: ['纪春洋', Validators.compose([Validators.required, Validators.maxLength(8)])],
      readerphone: ['15176271022', Validators.compose([Validators.required, mobileValidator])],
      readeremail: ['759107369@qq.com', Validators.compose([Validators.required, emailValidator])],
      readerpassword: ['1234567890', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(12)])]
    });
  }

  ngOnInit() {
  }

  register() {
    if (this.formModel.valid) {
      this.dataSource = this.userService.getUser(this.formModel.get('readerid').value);
      this.dataSource.subscribe(
        () => {
          console.log('账号已存在!');
        },
        () => {
          this.user.type = 'reader';
          this.user.userId = this.formModel.get('readerid').value;
          this.user.sex = this.formModel.get('readersex').value;
          this.user.age = this.formModel.get('readerage').value;
          this.user.name = this.formModel.get('readername').value;
          this.user.phone = this.formModel.get('readerphone').value;
          this.user.email = this.formModel.get('readeremail').value;
          this.user.password = this.formModel.get('readerpassword').value;

          console.log(this.user.userId);
          this.newSource = this.userService.createUser(this.user);
          this.newSource.subscribe(
            () => {
              console.log('注册成功!');
              this.router.navigate(['/login']);
            }
          );
        }
      );
    }
  }

  cancel() {
    this.router.navigate(['/login']);
  }

}
