import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employees.model';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss']
})
export class EmployeesListComponent implements OnInit  {
  employees: Employee[] = [
    {
      id: 'da72eba1-088d-4073-874c-a7fa8cf279ea',
      name: 'Nouman Farooq',
      email: 'nouman.farooq@tkxel.io',
      phone: 3315738231,
      salary: 50000,
      department: 'Engineering'
    },
    {
      id: '9093be95-2cfc-427c-900e-e5e18482de2c',
      name: 'Haroon Ashgar',
      email: 'haroon.ashgar@tkxel.io',
      phone: 3431532352,
      salary: 60000,
      department: 'Engineering'
    },
    {
      id: '55b63171-b78d-4317-a467-1af3678ff9ad',
      name: 'Muhammad Afzaal',
      email: 'm.afzaal@tkxel.io',
      phone: 3531832309,
      salary: 70000,
      department: 'Engineering'
    }
  ];
  constructor(){
  }
  ngOnInit(): void {
  }
  
}
