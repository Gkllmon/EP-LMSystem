import { Component, HostBinding, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import { slideInDownAnimation } from '../../../../animations';
import 'rxjs/add/operator/switchMap';
import { User } from '../../../../lms_domain/User';
import { UserService } from '../../../../lms_service/user.service';
import { ageValidator, emailValidator, mobileValidator, sexValidator } from '../../../../lms_validator/validators';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'ep-reader-detail',
  templateUrl: './reader-detail.component.html',
  styleUrls: ['./reader-detail.component.css'],
  animations: [ slideInDownAnimation ]
})
export class ReaderDetailComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  @HostBinding('style.position') position = 'absolute';

  private reader: User = null;

  private formModel: FormGroup;

  private dataSource: Observable<any>;

  private newSource: Observable<any>;

  constructor(private formBuilder: FormBuilder,
              private activeRouter: ActivatedRoute,
              private router: Router,
              private userService: UserService) {
    this.activeRouter.paramMap
      .switchMap((params: ParamMap) => this.userService.getReader(+params.get('id')))
      .subscribe(
        reader => this.reader = reader,
        () => {
        },
        () => {
          console.log('1151213131313');
        });

    this.formModel = formBuilder.group({
      readerid: ['2017218023', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(12)])],
      readersex: ['男', Validators.compose([Validators.required, sexValidator])],
      readerage: ['23', Validators.compose([Validators.required, ageValidator])],
      readername: ['纪春洋', Validators.compose([Validators.required, Validators.maxLength(8)])],
      readerphone: ['15176271022', Validators.compose([Validators.required, mobileValidator])],
      readeremial: ['759107369@qq.com', Validators.compose([Validators.required, emailValidator])],
      readerpassword: ['1234567890', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(12)])]
    });
  }

  ngOnInit() {
  }

  onSave() {
    if (this.formModel.valid) {
      this.dataSource = this.userService.getUser(this.formModel.get('readerid').value);
      this.dataSource.subscribe(
        () => {
          console.log('账号已存在!');
          this.reader.userId = this.formModel.get('readerid').value;
          this.reader.sex = this.formModel.get('readersex').value;
          this.reader.age = this.formModel.get('readerage').value;
          this.reader.name = this.formModel.get('readername').value;
          this.reader.phone = this.formModel.get('readerphone').value;
          this.reader.email = this.formModel.get('readeremial').value;
          this.reader.password = this.formModel.get('readerpassword').value;

          this.newSource = this.userService.updateUser(this.reader);
          this.newSource.subscribe(
            () => {
              console.log('修改成功!');
              this.router.navigate(['../../'], {relativeTo: this.activeRouter});
            }
          );
        },
        () => {
          this.reader.type = 'reader';
          this.reader.userId = this.formModel.get('readerid').value;
          this.reader.sex = this.formModel.get('readersex').value;
          this.reader.age = this.formModel.get('readerage').value;
          this.reader.name = this.formModel.get('readername').value;
          this.reader.phone = this.formModel.get('readerphone').value;
          this.reader.email = this.formModel.get('readeremial').value;
          this.reader.password = this.formModel.get('readerpassword').value;

          console.log(this.reader.userId);
          this.newSource = this.userService.createUser(this.reader);
          this.newSource.subscribe(
            () => {
              console.log('注册成功!');
              this.router.navigate(['../../'], {relativeTo: this.activeRouter});
            }
          );
        }
      );
    }
  }

  onCancel() {
    this.router.navigate(['../../'], {relativeTo: this.activeRouter});
  }

}
