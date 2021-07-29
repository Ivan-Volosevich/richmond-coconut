import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Config } from 'protractor';
import { PopupDialogComponent } from '../../components/popup-dialog/popup-dialog.component';
import { PopupDialogHallComponent } from '../../components/popup-dialog-hall/popup-dialog-hall.component';
import { PopupDialogDeliveryComponent } from '../../components/popup-dialog-delivery/popup-dialog-delivery.component';
import { HttpErrorHandler, HandleError } from '../../http-error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  configService: any;
  config!: { bookingTableForm: any; bookingDeliveryForm: any; bookingHallForm: any; };
  httpClient: any;
  configUrl = './thank.php';

  constructor(
    private http: HttpClient) {}

  getConfig() {
    return this.http.get<Config>(this.configUrl);
  }

  showConfig() {
    this.configService.getConfig()
      .subscribe((data: Config) => this.config = {
        bookingTableForm: data.bookingTableForm,
        bookingDeliveryForm:  data.bookingDeliveryForm,
          bookingHallForm: data.bookingHallForm,
      });
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }

  public post(configUrl: string): Observable<number>{

    var subject = new Subject<number>()
    const req = new HttpRequest('POST', configUrl, {
        reportProgress: true,
    });

    return subject.asObservable();
  }
}
