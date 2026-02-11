import { Component } from '@angular/core';
import { SecurityService } from '../../../core/services/security.service';
import { UserLoginRequest } from '../../../core/models/user.model';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  userLogin: UserLoginRequest = {
    email: '',
    password: ''
  };

  constructor(private securityService: SecurityService, private router: Router) {}

  onLogin() {
    // alert("LoginComponent onLogin called with: " + JSON.stringify(this.userLogin));
    const loginResult = this.securityService.login(this.userLogin);
    // console.log('Login attempt with:', this.userLogin);
    if (loginResult!=null) {
      this.router.navigate(['/private/dash']);
    } else {
      console.log('Login failed: Invalid email or password');
    }

  }

}
