import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesListComponent } from './components/employees/employees-list/employees-list.component';
import { HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditEmployeeComponent } from './components/edit-employee/edit-employee.component';
import { EmployeeHomeComponent } from './components/employees/employee-home/employee-home.component';
import { LoginFormComponent } from './components/login-management/login-form/login-form.component';
import { UsersService } from './services/users.service';
import { SigninComponent } from './components/login-management/signin/signin.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { JwtInterceptor } from './jwt.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    EmployeesListComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
    EmployeeHomeComponent,
    LoginFormComponent,
    SigninComponent,
    PageNotFoundComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
