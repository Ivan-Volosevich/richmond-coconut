import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banquet',
  templateUrl: './banquet.component.html',
  styleUrls: ['./banquet.component.scss']
})
export class BanquetComponent implements OnInit {

  value: string = 'hall-1';

  constructor() { }

  ngOnInit(): void {
  }
}
