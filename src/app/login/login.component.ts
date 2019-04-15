import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() username: string;
  password: string;
  loginSuccess = false;
  @Output('status') emittedStatus = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  checkLogin() {
    this.loginSuccess = this.username === 'username' && this.password === 'password';
    this.emittedStatus.emit(this.loginSuccess);
  }
}
