import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormControl, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import { matDatepickerAnimations } from '@angular/material/datepicker';
import { ConfigService } from '../../services/config/config.service';

@Component({
  selector: 'app-popup-dialog-delivery',
  templateUrl: './popup-dialog-delivery.component.html',
  styleUrls: ['./popup-dialog-delivery.component.scss']
})
export class PopupDialogDeliveryComponent implements OnInit {
  model: NgbDateStruct | undefined;

  bookingDeliveryForm = new FormGroup({
    clientName: new FormControl(null, [Validators.minLength(2), Validators.maxLength(15)]),
    clientPhone: new FormControl(null, [Validators.required, Validators.minLength(11), Validators.maxLength(15)]),
  });

  constructor(public dialog: MatDialog, private config: ConfigService) {
  }

  ngOnInit(): void {}

  checkSubmit() {}

  onSubmit() {
    if (this.bookingDeliveryForm.valid) {
      this.bookingDeliveryForm.value
    } else {
      this.bookingDeliveryForm.markAllAsTouched();
    }
  }
}
