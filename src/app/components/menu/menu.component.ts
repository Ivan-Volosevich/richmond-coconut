import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupDialogDeliveryComponent } from '../popup-dialog-delivery/popup-dialog-delivery.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  value: string = 'Холодныезакуски';
  
  selectedPage = '1';
  selectedAlcoholPage = '1';

  constructor(public dialog: MatDialog,) { }

  ngOnInit(): void {
  }

  setDrinksPage(n:string) {
    this.selectedPage = n;
  }

  setAlcoholPage(n:string) {
    this.selectedAlcoholPage = n;
  }

  openDialogDelivery() {
    this.dialog.open(PopupDialogDeliveryComponent);
  }
}
