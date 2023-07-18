import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { User } from '../models/user.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoginUserModel } from '../models/login-user.model';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  baseAPIUrl: string = environment.baseAPIUrl;
  currentUser: BehaviorSubject<any> = new BehaviorSubject(null);
  jwtHelperService = new JwtHelperService();
  constructor(private http: HttpClient) { }

  CreateUser(user: User): Observable<User> {
    return this.http.post<User>(environment.baseAPIUrl + 'api/user', user);
  }

  LoginUser(login: LoginUserModel): Observable<LoginUserModel> {
    return this.http.post<LoginUserModel>(environment.baseAPIUrl + 'api/user/login', login);
  }

  setToken(token: string){
    localStorage.setItem("access_token", token);
  }

  loadCurrentUser(){
    const token = localStorage.getItem("access_token");
    const userInfo = token ? this.jwtHelperService.decodeToken(token) : null;

    console.log('userInfo', userInfo);

    const data = userInfo ? {
      id: userInfo.id,
      firstName: userInfo.firstName,
      lastName: userInfo.lastName,
      email: userInfo.email,
      gender: userInfo.gender,
      mobile: userInfo.mobile
    } : null;

    this.currentUser.next(data);
  }

  isLoggedIn(){
    return localStorage.getItem('access_token') ? true : false;
  }

  logout() {
    localStorage.removeItem('access_token');
  }
}
