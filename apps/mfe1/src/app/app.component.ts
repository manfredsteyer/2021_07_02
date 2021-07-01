import { Component } from '@angular/core';
import { AuthService } from '@module-federation-example/auth-lib';

@Component({
  selector: 'module-federation-example-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  userName: string;
  constructor(authService: AuthService) {
    this.userName = authService.userName;
  }
}
