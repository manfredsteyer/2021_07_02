import { Component, OnInit } from '@angular/core';
import { AuthService } from '@module-federation-example/auth-lib';

@Component({
  selector: 'module-federation-example-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  userName: string;
  constructor(authService: AuthService) {
    this.userName = authService.userName;
  }

  ngOnInit(): void {
  }

}
