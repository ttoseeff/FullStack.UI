import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeesService } from 'src/app/employees.service';
import { Employee } from 'src/app/models/employees.model';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss']
})
export class EditEmployeeComponent implements OnInit {
  employeeDetails: Employee = {
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
  constructor(private employeesService: EmployeesService, private route: ActivatedRoute, private router: Router) {

  }
  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (param) => {
        const id = param.get('id');

        if (id) {
          this.employeesService.getEmployeeById(id).subscribe({
            next: (employee) => {
              this.employeeDetails = employee;
            }
          })
        }
      }
    })
  }

  UpdateEmployee() {
    console.log(this.employeeDetails);
    this.employeesService.updateEmployee(this.employeeDetails).subscribe({
      next: (employee) => {
        this.router.navigate(['employees']);
      }
    })
  }
}
