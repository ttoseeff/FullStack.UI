import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginUserModel } from 'src/app/models/login-user.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  isAccountLoggedIn: boolean = false;
  resMsg: string = '';
  constructor(private userService: UsersService, private router: Router) { }
  loginForm = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    pwd: new FormControl("", [Validators.required, Validators.minLength(6), Validators.maxLength(15)])
  });

  get Email(): FormControl {
    return this.loginForm.get('email') as FormControl;
  }

  get PWD(): FormControl {
    return this.loginForm.get('pwd') as FormControl;
  }
  formsubmitted() {
    console.log(this.loginForm.value);
    let data: LoginUserModel = {
      email: this.Email.value,
      password: this.PWD.value
    }
    this.userService.LoginUser(data).subscribe(response => {
      if (response.responseMsg == 'Success') {
        if (response.jwtToken)
          this.userService.setToken(response.jwtToken);
        this.userService.loadCurrentUser();
        this.resMsg = 'you have been successfully logged in';
        this.isAccountLoggedIn = true;
        this.router.navigateByUrl('/homepage');
      }
      else {
        this.resMsg = 'you entered wrong password/email';
        this.isAccountLoggedIn = false;
      }
    })
  }
}
