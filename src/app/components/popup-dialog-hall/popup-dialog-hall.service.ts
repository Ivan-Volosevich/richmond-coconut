import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { HttpErrorHandler, HandleError } from '../../http-error-handler.service';
import { PopupDialogHallComponent } from './popup-dialog-hall.component';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class PopupDialogHallService {
  config!: { bookingTableForm: any };
  httpClient: any;
  thankUrl = './thank.php';
  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('HeroesService');
  }

  pickClientData(popupDialog: PopupDialogHallComponent): Observable<PopupDialogHallComponent> {
    console.log(this.pickClientData.arguments)
    return this.http.post<PopupDialogHallComponent>(this.thankUrl, popupDialog, httpOptions)
      .pipe(
        catchError(this.handleError('pickClientData', popupDialog))
      );
  }
}
