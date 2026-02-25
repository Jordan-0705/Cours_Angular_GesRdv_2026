import { Injectable } from '@angular/core';
import { UserLoginRequest, UserLoginResponse } from '../models/user.model';
import { MOCK_USERS } from '@mocks';
import { ISecurityService } from './interfaces/security.interface.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SecurityMockService implements ISecurityService{

  private readonly TOKEN_KEY = 'token';
  private readonly USER_KEY = 'current-user';

  //Behavior Subject pour stocker l'état de l'utilisateur connecté et permettre aux composants de s'abonner à cet état
  private currentUserSubject = new BehaviorSubject<UserLoginResponse | null>(null);
  public currentUser: Observable<UserLoginResponse|null> = this.currentUserSubject.asObservable();
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);

  constructor() { }

  login(userLoginRequest:UserLoginRequest): UserLoginResponse | null {
    const users = [...MOCK_USERS];
    const user = users.find(u => u.email === userLoginRequest.email && u.password === userLoginRequest.password);
    if(user!=null) {
      let userLoginResponse: UserLoginResponse = { token: 'fake-jwt-token', user: user };
      this.saveLocalStorage(userLoginResponse);
      this.currentUserSubject.next(userLoginResponse); // Met à jour l'état de l'utilisateur connecté
      this.isAuthenticatedSubject.next(true); // Met à jour l'état d'authentification
      return userLoginResponse; 
    }
    return null;
  }

  private saveLocalStorage(userLoginResponse: UserLoginResponse) {
    localStorage.setItem(this.TOKEN_KEY, userLoginResponse.token!);
    localStorage.setItem(this.USER_KEY, JSON.stringify(userLoginResponse.user));
  }

  getCurrentUser(): UserLoginResponse | null {
    return this.currentUserSubject.getValue();
  }

  isAuthenticated(): boolean {
    return this.isAuthenticatedSubject.getValue();
  }

  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.USER_KEY);
  }
}
