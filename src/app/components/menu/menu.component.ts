import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  value: string = 'Холодныезакуски';
  
  selectedPage = '1';
  selectedAlcoholPage = '1';

  constructor() { }

  ngOnInit(): void {
  }

  setDrinksPage(n:string) {
    this.selectedPage = n;
  }

  setAlcoholPage(n:string) {
    this.selectedAlcoholPage = n;
  }
}
