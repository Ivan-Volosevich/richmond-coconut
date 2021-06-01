import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banquet',
  templateUrl: './banquet.component.html',
  styleUrls: ['./banquet.component.scss']
})
export class BanquetComponent implements OnInit {
  public show:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  showHall() {
    this.show = true;
  }
}
