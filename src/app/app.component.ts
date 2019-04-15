import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  route = 'login';

  onLogin(loginSuccess: boolean) {
    if (!loginSuccess) {
      alert('Credenziali non valide!');
    } else {
      setTimeout(() => {
        this.route = 'home';
      }, 1000);
    }
  }
}
