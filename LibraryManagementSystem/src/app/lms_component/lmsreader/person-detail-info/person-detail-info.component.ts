import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../lms_service/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ageValidator, emailValidator, mobileValidator, sexValidator } from '../../../lms_validator/validators';
import { Observable } from 'rxjs/Observable';
import { User } from '../../../lms_domain/User';

@Component({
  selector: 'app-person-detail-info',
  templateUrl: './person-detail-info.component.html',
  styleUrls: ['./person-detail-info.component.css']
})
export class PersonDetailInfoComponent implements OnInit {

  private dataSource: Observable<any>;

  private formModel: FormGroup;

  private user: User = new User();

  constructor(private userService: UserService,
              private formBuilder: FormBuilder) {
    this.formModel = formBuilder.group({
      readerid: ['', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(12)])],
      readersex: ['', Validators.compose([Validators.required, sexValidator])],
      readerage: ['', Validators.compose([Validators.required, ageValidator])],
      readertype: ['', Validators.required],
      readername: ['', Validators.compose([Validators.required, Validators.maxLength(8)])],
      readerphone: ['', Validators.compose([Validators.required, mobileValidator])],
      readeremail: ['', Validators.compose([Validators.required, emailValidator])],
      readerpassword: ['', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(12)])]
    });
  }

  ngOnInit() {
  }

  onSave() {
    if (this.formModel.valid) {
      this.user.type = 'reader';
      this.user.userId = this.userService.currentUser.userId;
      this.user.type = this.userService.currentUser.type;
      this.user.book = this.userService.currentUser.book;
      this.user.sex = this.formModel.get('readersex').value;
      this.user.age = this.formModel.get('readerage').value;
      this.user.name = this.formModel.get('readername').value;
      this.user.phone = this.formModel.get('readerphone').value;
      this.user.email = this.formModel.get('readeremail').value;
      this.user.password = this.formModel.get('readerpassword').value;

      this.dataSource = this.userService.updateUser(this.user);
      this.dataSource.subscribe(
        () => {
          console.log('修改成功!');
        }
      );
    }
  }

  onCancel() {

  }
}
