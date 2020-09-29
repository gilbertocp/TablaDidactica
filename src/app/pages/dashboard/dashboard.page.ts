import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor(
    public router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  logout(): void {
    localStorage.removeItem('user_cred_token');
    this.authService.logout()
    .then(() => this.router.navigate(['/login']))
    .catch(() => this.router.navigate(['/login']));
  }
}
