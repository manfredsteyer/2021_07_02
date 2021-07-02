import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'platform'
})
export class AuthService {
  userName: string;

  constructor() {
    console.log('AuthService created')
  }

  login(userName: string): void {
    this.userName = userName;
  }
}
