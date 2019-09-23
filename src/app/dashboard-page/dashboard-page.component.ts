import { AuthService } from './../shared/services/auth.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {

  public userName: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.userName = this.authService.getUserName();
  }

}
