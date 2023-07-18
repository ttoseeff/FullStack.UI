import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  /**
   *
   */
  constructor(private router: Router, private usersService: UsersService) {
    
  }

  logout(){
    this.usersService.logout();
    this.router.navigateByUrl('/login');
  }
}
