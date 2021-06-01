import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banquet-hall-first',
  templateUrl: './banquet-hall-first.component.html',
  styleUrls: ['./banquet-hall-first.component.scss']
})
export class BanquetHallFirstComponent implements OnInit {

  title = 'Изысканный интерьер для проведения незабываемых мероприятий';

  constructor() { }

  ngOnInit(): void {
  }

}
