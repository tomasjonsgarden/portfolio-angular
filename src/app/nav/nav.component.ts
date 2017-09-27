import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  menuOpen = false;
  constructor() { }

  ngOnInit() {
  }

  menuChanged() {
    this.menuOpen = !this.menuOpen;
  }

  menuClose() {
    this.menuOpen = false;
  }

}
