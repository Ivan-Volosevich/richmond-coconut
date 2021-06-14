import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormControl, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import { matDatepickerAnimations } from '@angular/material/datepicker';

@Component({
  selector: 'app-popup-dialog',
  templateUrl: './popup-dialog.component.html',
  styleUrls: ['./popup-dialog.component.scss']
})
export class PopupDialogComponent implements OnInit {
  model: NgbDateStruct | undefined;

  bookingTableForm = new FormGroup({
    clientName: new FormControl(null, [Validators.minLength(2), Validators.maxLength(15)]),
    dateAndTime: new FormGroup({
      datePick: new FormControl(null),
      timePick: new FormControl(null, [Validators.minLength(2), Validators.maxLength(4)]),
    }),
    clientPhone: new FormControl(null, [Validators.required, Validators.minLength(11), Validators.maxLength(15)]),
  });

  constructor(public dialog: MatDialog) {
  }

  ngOnInit(): void {}

  checkSubmit() {}

  onSubmit() {
    if (this.bookingTableForm.valid) {
    let bookingTableResult = Object.assign(
      this.bookingTableForm.value
    );

    let minutesWithZero = this.bookingTableForm.controls['dateAndTime'].value['timePick'].getMinutes();
    if (this.bookingTableForm.controls['dateAndTime'].value['timePick'].getMinutes() <= 9) {
      minutesWithZero = '0' + this.bookingTableForm.controls['dateAndTime'].value['timePick'].getMinutes();
    }
    let iNeed = this.bookingTableForm.controls['dateAndTime'].value['timePick'].getHours() + ':' + minutesWithZero;
    //this.http.post('/send', bookingTableResult, () => {
      //showConfirmation
    //})
    console.log('Time: ', iNeed);
    console.log('Новая заявка на столик: ', bookingTableResult);
    } else {
      this.bookingTableForm.markAllAsTouched();
    }
    
  }

}
