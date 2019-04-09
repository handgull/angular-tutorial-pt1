import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  loginSuccess = false;

  constructor() { }

  ngOnInit() {
  }

  checkLogin() {
    this.loginSuccess = this.username === 'username' && this.password === 'password';

    if (!this.loginSuccess) {
      alert('Credenziali non valide!');
    }
  }
}
