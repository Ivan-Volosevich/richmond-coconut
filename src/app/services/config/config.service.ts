import { Injectable } from '@angular/core';
import { HttpClient, HttpEventType, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Config } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  configService: any;
  config!: { clientName: string; clientPhone: any; datePick: any; timePick: any; };
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
          clientName: data.clientName,
          clientPhone:  data.clientPhone,
          datePick: data.datePick,
          timePick: data.timePick,
      });
  }

  // public post(url: string, file: File): Observable<number>{

  //   var subject = new Subject<number>()
  //   const req = new HttpRequest('POST', url, file, {
  //       reportProgress: true,
  //   });

  //   this.httpClient.request(req).subscribe(event => {
  //       if (event.type === HttpEventType.UploadProgress) {
  //           const percentDone = Math.round(100 * event.loaded / event.total);
  //           subject.next(percentDone);
  //         } else if (event instanceof HttpResponse) {
  //           subject.complete();
  //         }
  //   });
  //   return subject.asObservable();
  // }
}
