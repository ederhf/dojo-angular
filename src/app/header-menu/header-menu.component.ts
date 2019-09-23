import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss']
})
export class HeaderMenuComponent implements OnInit {

  @Input()
  public userName: string;

  @Output()
  public logoutEventEmmiter = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public logoutEvent(): void {
    this.logoutEventEmmiter.emit(this.userName);
  }

}
