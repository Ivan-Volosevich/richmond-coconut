import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { HttpErrorHandler, HandleError } from '../../http-error-handler.service';
import { PopupDialogComponent } from './popup-dialog.component';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class PopupService {
  config!: { bookingTableForm: any };
  httpClient: any;
  thankUrl = './thank.php';
  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('HeroesService');
  }

  pickClientData(popupDialog: PopupDialogComponent): Observable<PopupDialogComponent> {
    console.log(this.pickClientData.arguments)
    return this.http.post<PopupDialogComponent>(this.thankUrl, popupDialog, httpOptions)
      .pipe(
        catchError(this.handleError('pickClientData', popupDialog))
      );
  }
}
