import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../../../lms_service/user.service';
import { ageValidator, emailValidator, mobileValidator, sexValidator } from '../../../../lms_validator/validators';

@Component({
  selector: 'ep-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {

  formModel: FormGroup;

  constructor(private formBuilder: FormBuilder,
              public userService: UserService,
              public router: Router) {
    this.formModel = formBuilder.group({
      adminid: ['', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(12)])],
      adminsex: ['', Validators.compose([Validators.required, sexValidator])],
      adminage: ['', Validators.compose([Validators.required, ageValidator])],
      adminname: ['', Validators.compose([Validators.required, Validators.maxLength(8)])],
      admintype: ['type', Validators.required],
      adminphone: ['', Validators.compose([Validators.required, mobileValidator])],
      adminemail: ['', Validators.compose([Validators.required, emailValidator])],
      adminpassword: ['', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(12)])]
    });
  }

  ngOnInit() {
  }

}
