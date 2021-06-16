import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormControl, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import { matDatepickerAnimations } from '@angular/material/datepicker';
import { ConfigService } from '../../services/config/config.service';

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

  constructor(public dialog: MatDialog, private config: ConfigService) {
  }

  ngOnInit(): void {}

  checkSubmit() {}

  onSubmit() {
    if (this.bookingTableForm.valid) {
      let minutesWithZero = this.bookingTableForm.controls['dateAndTime'].value['timePick'].getMinutes();
      let hoursWithZero = this.bookingTableForm.controls['dateAndTime'].value['timePick'].getHours();
      if (minutesWithZero <= 9) {
        minutesWithZero = '0' + minutesWithZero;
      } else if (hoursWithZero <= 9) {
        hoursWithZero = '0' + hoursWithZero;
      }
      let timeOfBooking = hoursWithZero + ':' + minutesWithZero;

      this.bookingTableForm.get(['dateAndTime', 'timePick'])?.setValue(timeOfBooking);
      //this.http.post('/send', this.bookingTableForm.value, () => {
        //showConfirmation
      //})
      this.bookingTableForm.value
    } else {
      this.bookingTableForm.markAllAsTouched();
    }
    
  }

}
