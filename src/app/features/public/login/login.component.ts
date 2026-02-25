import { Component, Inject } from '@angular/core';
import { SecurityService } from '../../../core/services/security.service';
import { UserLoginRequest } from '../../../core/models/user.model';
import { FormsModule, NgForm } from '@angular/forms';
import { JsonPipe, NgClass } from '@angular/common';
import { Router } from '@angular/router';
import { ISecurityService, SECURITY_SERVICE_TOKEN } from '../../../core/services/interfaces/security.interface.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, NgClass],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  userLogin: UserLoginRequest = {
    email: '',
    password: ''
  };

  errorMessage: string = '';

  constructor(@Inject(SECURITY_SERVICE_TOKEN) private securityService: ISecurityService, private router: Router) {}

  onLogin(formCrl: NgForm): void {

    if (formCrl.invalid) {
      this.errorMessage = 'Veuillez remplir tous les champs requis correctement.';
      return;
    }

    // alert("LoginComponent onLogin called with: " + JSON.stringify(this.userLogin));
    const loginResult = this.securityService.login(this.userLogin);
    // console.log('Login attempt with:', this.userLogin);
    if (loginResult!=null) {
      this.router.navigate(['/private/dash']);
    }
  }

  isFieldValid(fieldName: string, formCrl: NgForm): boolean {
    const field = formCrl?.controls[fieldName];
    return !!(field && field.invalid && (field.dirty || field.touched));
  } 

}
