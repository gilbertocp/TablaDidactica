import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private authService: AuthService) { 
    this.authService.getCurrentUser()
      .then(console.log)
      .catch(console.log);
  }

  presionado(e) {
    console.log(e);
  }
}
