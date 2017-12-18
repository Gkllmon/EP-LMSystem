import { FormControl, FormGroup } from '@angular/forms';

export function sexValidator(control: FormControl): any {
  let valid = (control.value === '男' || control.value === '女');
  return valid ? null : {sex: true};
}

export function ageValidator(control: FormControl): any {
  let valid = (control.value >= 10 && control.value <= 100);
  return valid ? null : {age: true};
}

export function emailValidator(control: FormControl): any {
  var myreg = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
  let valid = myreg.test(control.value);
  return valid ? null : {email: true};
}

export function mobileValidator(control: FormControl): any {
  var myreg = /^1[34578]\d{9}$/;
  let valid = myreg.test(control.value);
  return valid ? null : {mobile: true};
}

export function equalValidator(group: FormGroup): any {
  let password: FormControl = group.get('password') as FormControl;
  let newpassw: FormControl = group.get('newpassw') as FormControl;
  let valid: boolean = (password.value === newpassw.value);
  return valid ? null : {equal: {describe: '新密码和确认新密码不匹配'}};
}
