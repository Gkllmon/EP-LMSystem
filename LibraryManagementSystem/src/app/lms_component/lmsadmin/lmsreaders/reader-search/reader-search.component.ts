import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserService } from '../../../../lms_service/user.service';

@Component({
  selector: 'ep-reader-search',
  templateUrl: './reader-search.component.html',
  styleUrls: ['./reader-search.component.css']
})
export class ReaderSearchComponent implements OnInit {

  private dataSource: Observable<any>;

  private formModel: FormGroup;

  constructor(private formBuilder: FormBuilder,
              public userService: UserService,
              private router: Router,
              private activeRouter: ActivatedRoute) {
    this.formModel = formBuilder.group({
      readerid: ['2017218023', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(12)])]
    });
  }

  ngOnInit() {
  }

  SearchOne() {
    if (this.formModel.valid) {
      this.dataSource = this.userService.getReader(this.formModel.get('readerid').value);
      this.dataSource.subscribe(
        () => {
          this.router.navigate(['./info', this.formModel.get('readerid').value], {relativeTo: this.activeRouter});
        },
        () => {
          console.log('错误');
        }
      );
    }
  }

  SearchAll() {
    this.router.navigate(['./display'], {relativeTo: this.activeRouter});
  }

}


