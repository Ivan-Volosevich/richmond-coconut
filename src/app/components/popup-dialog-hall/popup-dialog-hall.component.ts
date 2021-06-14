import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormControl, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import { matDatepickerAnimations } from '@angular/material/datepicker';

@Component({
  selector: 'app-popup-dialog-hall',
  templateUrl: './popup-dialog-hall.component.html',
  styleUrls: ['./popup-dialog-hall.component.scss']
})
export class PopupDialogHallComponent implements OnInit {
  model: NgbDateStruct | undefined;

  bookingHallForm = new FormGroup({
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
    if (this.bookingHallForm.valid) {
    let bookingTableResult = Object.assign(
      this.bookingHallForm.value
    );

    let minutesWithZero = this.bookingHallForm.controls['dateAndTime'].value['timePick'].getMinutes();
    if (this.bookingHallForm.controls['dateAndTime'].value['timePick'].getMinutes() <= 9) {
      minutesWithZero = '0' + this.bookingHallForm.controls['dateAndTime'].value['timePick'].getMinutes();
    }
    let iNeed = this.bookingHallForm.controls['dateAndTime'].value['timePick'].getHours() + ':' + minutesWithZero;
    //this.http.post('/send', bookingTableResult, () => {
      //showConfirmation
    //})
    console.log('Time: ', iNeed);
    console.log('Новая заявка на столик: ', bookingTableResult);
    } else {
      this.bookingHallForm.markAllAsTouched();
    }
  }
}
