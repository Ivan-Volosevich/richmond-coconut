import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  value: string = 'Холодныезакуски';
  valuedrinks: string = 'drinks1';
  valuealcdrinks: string = 'alcdrinks1';

  constructor() { }

  ngOnInit(): void {
  }

}
