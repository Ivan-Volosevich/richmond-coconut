import { Injectable } from '@angular/core';
import { HttpClient, HttpEventType, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Config } from 'protractor';
import { PopupDialogComponent } from '../../components/popup-dialog/popup-dialog.component';
import { PopupDialogHallComponent } from '../../components/popup-dialog-hall/popup-dialog-hall.component';
import { PopupDialogDeliveryComponent } from '../../components/popup-dialog-delivery/popup-dialog-delivery.component';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  configService: any;
  config!: { bookingTableForm: any; bookingDeliveryForm: any; bookingHallForm: any; };
  httpClient: any;
  configUrl = './thank.php';

  // const options = {
  //   responseType: 'text' as const,
  // };
  // client.get('/foo', options);

  constructor(private http: HttpClient) {}

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

  public post(configUrl: string): Observable<number>{

    var subject = new Subject<number>()
    const req = new HttpRequest('POST', configUrl, {
        reportProgress: true,
    });

    return subject.asObservable();
  }
}
