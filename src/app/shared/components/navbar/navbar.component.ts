import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  menuIsOn: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleButtonClicked() {
    this.menuIsOn = !this.menuIsOn;
  }

}
