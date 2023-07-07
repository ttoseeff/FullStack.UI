import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Employee } from './models/employees.model';
import { Observable } from 'rxjs';
import { EmployeesListComponent } from './components/employees/employees-list/employees-list.component';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  baseAPIUrl: string = environment.baseAPIUrl;
  constructor(private http: HttpClient) { }



  getAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(environment.baseAPIUrl + 'api/employees');
  }

  insertEmployee(employee: Employee): Observable<Employee> {
    employee.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<Employee>(environment.baseAPIUrl
      + 'api/employees', employee);
  }

  getEmployeeById(id: string): Observable<Employee> {
    return this.http.get<Employee>(environment.baseAPIUrl + 'api/employees/' + id);
  }

  updateEmployee(employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(environment.baseAPIUrl + 'api/employees', employee);
  }

  deleteEmployee(id: string): Observable<Employee> {
    return this.http.delete<Employee>(environment.baseAPIUrl + 'api/employees/' + id )
  }

}
