import { AuthService } from './../shared/services/auth.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {

  public userName: string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.userName = this.authService.getUserName();
  }

  public logout(userNameFromOutside: string) {
    alert('This user will be logged out: "' + userNameFromOutside + '"');
    this.authService.removeUserDataFromLocalStorage();
    this.router.navigate(['login']);
  }

}
