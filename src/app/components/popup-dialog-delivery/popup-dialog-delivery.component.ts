import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormControl, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import { matDatepickerAnimations } from '@angular/material/datepicker';

@Component({
  selector: 'app-popup-dialog-delivery',
  templateUrl: './popup-dialog-delivery.component.html',
  styleUrls: ['./popup-dialog-delivery.component.scss']
})
export class PopupDialogDeliveryComponent implements OnInit {
  model: NgbDateStruct | undefined;

  bookingDeliveryForm = new FormGroup({
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
    if (this.bookingDeliveryForm.valid) {
    let bookingDeliveryResult = Object.assign(
      this.bookingDeliveryForm.value
    );

    let minutesWithZero = this.bookingDeliveryForm.controls['dateAndTime'].value['timePick'].getMinutes();
    if (this.bookingDeliveryForm.controls['dateAndTime'].value['timePick'].getMinutes() <= 9) {
      minutesWithZero = '0' + this.bookingDeliveryForm.controls['dateAndTime'].value['timePick'].getMinutes();
    }
    let iNeed = this.bookingDeliveryForm.controls['dateAndTime'].value['timePick'].getHours() + ':' + minutesWithZero;
    //this.http.post('/send', bookingDeliveryResult, () => {
      //showConfirmation
    //})
    console.log('Time: ', iNeed);
    console.log('Новая заявка на столик: ', bookingDeliveryResult);
    } else {
      this.bookingDeliveryForm.markAllAsTouched();
    }
  }
}
