import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-employee-home',
  templateUrl: './employee-home.component.html',
  styleUrls: ['./employee-home.component.scss']
})
export class EmployeeHomeComponent implements OnInit {
  /**
   *
   */
  constructor(private usersService: UsersService, private router: Router) {
  }
  
  loginInfo: User = {} as User;

  ngOnInit(): void {
    this.usersService.currentUser.asObservable().subscribe(res => {
      console.log('fromjwtToken', res);
      this.loginInfo = {
        email: res.email,
        id: res.id,
        firstname: res.firstName,
        lastname: res.lastName,
        mobile: res.mobile,
        gender: res.gender,
        password: ''
      }
    })
  }
  
  logout() {
    this.usersService.logout();
    this.router.navigateByUrl('/login');
  }
}
