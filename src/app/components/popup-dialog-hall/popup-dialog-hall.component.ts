import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormControl, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import { matDatepickerAnimations } from '@angular/material/datepicker';
import { ConfigService } from '../../services/config/config.service';
import { HttpClient } from '@angular/common/http';
import { PopupDialogHallService } from './popup-dialog-hall.service';

@Component({
  selector: 'app-popup-dialog-hall',
  templateUrl: './popup-dialog-hall.component.html',
  styleUrls: ['./popup-dialog-hall.component.scss']
})
export class PopupDialogHallComponent implements OnInit {
  model: NgbDateStruct | undefined;
  postData: any;
  thankUrl = './thank.php';
  httpOptions: any;

  bookingHallForm = new FormGroup({
    clientName: new FormControl(null, [Validators.minLength(2), Validators.maxLength(15)]),
    dateAndTime: new FormGroup({
      datePick: new FormControl(null),
      timePick: new FormControl(null, [Validators.minLength(2), Validators.maxLength(4)]),
    }),
    clientPhone: new FormControl(null, [Validators.required, Validators.minLength(11), Validators.maxLength(15)]),
  });

  constructor(public dialog: MatDialog, private config: ConfigService, private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.post<any>(this.thankUrl, {title: 'POST message'}).subscribe(data => {
      this.postData = this.bookingHallForm.value;
    })
  }

  checkSubmit() {}

  onSubmit() {
    if (this.bookingHallForm.valid) {
      let minutesWithZero = this.bookingHallForm.controls['dateAndTime'].value['timePick'].getMinutes();
      let hoursWithZero = this.bookingHallForm.controls['dateAndTime'].value['timePick'].getHours();
      if (minutesWithZero <= 9) {
        minutesWithZero = '0' + minutesWithZero;
      } else if (hoursWithZero <= 9) {
        hoursWithZero = '0' + hoursWithZero;
      }
      let timeOfBooking = hoursWithZero + ':' + minutesWithZero;

      this.bookingHallForm.get(['dateAndTime', 'timePick'])?.setValue(timeOfBooking);
      this.bookingHallForm.value;
      this.http.post(this.thankUrl, this.bookingHallForm.value, this.httpOptions);
      this.bookingHallForm.reset();
      this.bookingHallForm.value
    } else {
      this.bookingHallForm.markAllAsTouched();
    }
  }
}
