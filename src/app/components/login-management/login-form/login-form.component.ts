import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  repeatPass: string = 'none';
  resMsg: string = '';
  isAccountCreated: boolean = false;
  constructor(private router: Router, private userSevice: UsersService) {

  }
  ngOnInit(): void {
  }
  registerForm = new FormGroup({
    firstName: new FormControl("", [Validators.minLength(2), Validators.required, Validators.pattern('[a-zA-Z].*')]),
    lastName: new FormControl("", [Validators.minLength(2), Validators.required, Validators.pattern('[a-zA-Z].*')]),
    email: new FormControl("", [Validators.required, Validators.email]),
    mobile: new FormControl("", [Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(11), Validators.maxLength(11)]),
    gender: new FormControl("", [Validators.required]),
    pwd: new FormControl("", [Validators.required, Validators.minLength(6), Validators.maxLength(15)]),
    rpwd: new FormControl("")
  });
  goToHomePage() {
    this.router.navigate(['homepage']);
  }

  formsubmitted() {
    if ([this.PWD.value === this.RPWD.value]) {

      console.log(this.registerForm)
      this.repeatPass = 'none';
      let user: User = {
        id: 0,
        firstname: this.FirstName.value,
        lastname: this.LastName.value,
        email: this.Email.value,
        gender: this.Gender.value,
        mobile: this.Mobile.value,
        password: this.PWD.value,
      }
      this.userSevice.CreateUser(user).subscribe({
        next: (res)=> {
          console.log(res.id);
          if(res.id != 0) {
            this.resMsg = 'your account has been successfully created!';
            this.isAccountCreated = true;
          } else {
            this.resMsg = 'Email you entered is already exist.'
            this.isAccountCreated = false;

          }
        },
        error: (res)=> {
          this.resMsg = 'Something Went Wrong';
          this.isAccountCreated = false;

        }
      });
    } else {
      this.repeatPass = 'inline';
    }
  }

  get FirstName(): FormControl {
    return this.registerForm.get('firstName') as FormControl;
  }

  get LastName(): FormControl {
    return this.registerForm.get('lastName') as FormControl;
  }

  get Email(): FormControl {
    return this.registerForm.get('email') as FormControl;
  }

  get Mobile(): FormControl {
    return this.registerForm.get('mobile') as FormControl;
  }

  get Gender(): FormControl {
    return this.registerForm.get('gender') as FormControl;
  }

  get PWD(): FormControl {
    return this.registerForm.get('pwd') as FormControl;
  }

  get RPWD(): FormControl {
    return this.registerForm.get('rpwd') as FormControl;
  }
}
