import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesListComponent } from './components/employees/employees-list/employees-list.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EditEmployeeComponent } from './components/edit-employee/edit-employee.component';
import { EmployeeHomeComponent } from './components/employees/employee-home/employee-home.component';
import { LoginFormComponent } from './components/login-management/login-form/login-form.component';
import { SigninComponent } from './components/login-management/signin/signin.component';

const routes: Routes = [
  {
    path: '',
    component: SigninComponent
  },
  {
    path: 'homepage',
    component: EmployeeHomeComponent
  },
  {
    path: 'employees',
    component: EmployeesListComponent
  },
  {
    path: 'employees/add',
    component: AddEmployeeComponent
  },
  {
    path: 'employees/edit/:id',
    component: EditEmployeeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
