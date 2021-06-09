import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  navOpened: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  handleClick(e: any) {
    if (e.target.nodeName == 'A') {
      this.navOpened = false;
      console.log('e ', this.navOpened)
    }
  }

  onNavToggle() {
    this.navOpened = !this.navOpened;
  }
}

