import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormControl, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-popup-dialog',
  templateUrl: './popup-dialog.component.html',
  styleUrls: ['./popup-dialog.component.scss']
})
export class PopupDialogComponent implements OnInit {
  model: NgbDateStruct | undefined;

  bookingTableForm: FormGroup = new FormGroup({
    clientName: new FormControl(null, [Validators.minLength(2), Validators.maxLength(15)]),
    dateAndTime: new FormGroup({
      datePick: new FormControl(null),
      timePick: new FormControl(null),
    }),
    clientPhone: new FormControl(null, [Validators.required, Validators.minLength(11), Validators.maxLength(15)]),
  });

  constructor(public dialog: MatDialog) {
  }

  ngOnInit(): void {
    // this.bookingTableForm.valueChanges.subscribe((value: any) => console.log(value));

    // this.loginForm.reset()
  }

  checkSubmit() {
    console.log("I was clicked!")
  }

  onSubmit() {
    if (this.bookingTableForm.valid) {
      console.log('ye')
    let bookingTableResult = Object.assign(
      this.bookingTableForm.value
    );
    //this.http.post('/send', bookingTableResult, () => {
      //showConfirmation
    //})
    console.log('Новая заявка на столик: ', bookingTableResult);
    } else {
      this.bookingTableForm.markAllAsTouched();
    }
    
  }

}
