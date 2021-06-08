import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormControl, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-popup-dialog',
  templateUrl: './popup-dialog.component.html',
  styleUrls: ['./popup-dialog.component.scss']
})
export class PopupDialogComponent implements OnInit {
  bookingTableForm: FormGroup = new FormGroup({
    clientName: new FormControl(null, [Validators.minLength(2), Validators.maxLength(15)]),
    dateAndTime: new FormGroup({
      date: new FormControl(null),
      time: new FormControl(null),
    }),
    clientPhone: new FormControl(null, [Validators.required, Validators.minLength(11), Validators.maxLength(15)]),
  });

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    // this.bookingTableForm.valueChanges.subscribe((value: any) => console.log(value));

    // this.loginForm.reset()
  }

  checkSubmit() {
    if (!this.bookingTableForm.valid) {
      console.log('inval', this.bookingTableForm.controls['clientPhone'].invalid);
      this.bookingTableForm.controls['clientPhone'].invalid;
    }
  }

  onSubmit() {
    let bookingTable = Object.assign(
      this.bookingTableForm.value
    );
    console.log('Новая заявка на столик: ', bookingTable);
  }

}
