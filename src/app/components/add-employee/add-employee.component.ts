import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeesService } from 'src/app/employees.service';
import { Employee } from 'src/app/models/employees.model';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent {
  employeeRequest: Employee = {
    id: '',
    name: '',
    email: '',
    phone: 0,
    salary: 0,
    department: ''
  }
  /**
   *
   */
  constructor(private employeesService: EmployeesService, private router: Router) {

  }

  addEmployee() {
    console.log(this.employeeRequest);
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
