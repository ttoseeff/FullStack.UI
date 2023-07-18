import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeesService } from 'src/app/employees.service';
import { Employee } from 'src/app/models/employees.model';
import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {
  employeeRequest: Employee = {
    id: '',
    name: '',
    email: '',
    phone: 0,
    salary: 0,
    department: ''
  }

  userInfo: User = {} as User;
  /**
   *
   */
  constructor(private employeesService: EmployeesService, private usersSevice: UsersService,
     private router: Router)  {

  }
  ngOnInit(): void {
    
    this.usersSevice.currentUser.asObservable().subscribe(res => {
      this.userInfo = {
        id: res.id,
        firstname: res.firstname,
        lastname: res.lastname,
        email: res.email,
        gender: res.gender,
        mobile: res.mobile,
        password: ''
      }
    })
  }

  addEmployee() {
    console.log(this.employeeRequest);
    this.employeeRequest.userId = this.userInfo.id;
    this.employeesService.insertEmployee(this.employeeRequest).subscribe(
      {
      next: (employee) => {
        this.router.navigate(['employees']);
      },
      error: (response) => {
        console.log(response);
      }
    }      
    );

  }
}
