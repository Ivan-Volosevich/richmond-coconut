import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  checked: boolean = false;
  toggleChange = document.querySelector('toggle');
  aLink = document.querySelectorAll('[data-link]');

  constructor() { }

  ngOnInit(): void {
  }

  mmmm() {
    this.aLink.forEach((b) => {
      b.addEventListener('click', (e) => {
        this.checked = this.checked? this.checked : false;
      });
    })
  }

}

