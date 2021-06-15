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
      let minutesWithZero = this.bookingDeliveryForm.controls['dateAndTime'].value['timePick'].getMinutes();
      let hoursWithZero = this.bookingDeliveryForm.controls['dateAndTime'].value['timePick'].getHours();
      if (minutesWithZero <= 9) {
        minutesWithZero = '0' + minutesWithZero;
      } else if (hoursWithZero <= 9) {
        hoursWithZero = '0' + hoursWithZero;
      }
      let timeOfBooking = hoursWithZero + ':' + minutesWithZero;

      this.bookingDeliveryForm.get(['dateAndTime', 'timePick'])?.setValue(timeOfBooking);
      //this.http.post('/send', bookingDeliveryResult, () => {
        //showConfirmation
      //})
      console.log('Time: ', timeOfBooking);
      console.log('Новая заявка на столик: ', this.bookingDeliveryForm.value);
    } else {
      this.bookingDeliveryForm.markAllAsTouched();
    }
  }
}
