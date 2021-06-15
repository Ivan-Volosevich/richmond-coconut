import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { OwlModule } from 'ngx-owl-carousel';
import { AppRoutingModule } from './app-routing.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { IMaskModule } from 'angular-imask';
import { LightboxModule } from 'ngx-lightbox';
import { NgxLazyModule } from 'ngx-lazy-image';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { BanquetComponent } from './components/banquet/banquet.component';
import { MenuComponent } from './components/menu/menu.component';
import { HotelComponent } from './components/hotel/hotel.component';
import { PosterComponent } from './components/poster/poster.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PopupDialogComponent } from './components/popup-dialog/popup-dialog.component';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { OWL_DATE_TIME_LOCALE } from 'ng-pick-datetime';
import { PopupDialogHallComponent } from './components/popup-dialog-hall/popup-dialog-hall.component';
import { PopupDialogDeliveryComponent } from './components/popup-dialog-delivery/popup-dialog-delivery.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    BanquetComponent,
    MenuComponent,
    HotelComponent,
    PosterComponent,
    GalleryComponent,
    ContactsComponent,
    FooterComponent,
    PopupDialogComponent,
    PopupDialogHallComponent,
    PopupDialogDeliveryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OwlModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    IMaskModule,
    LightboxModule,
    NgxLazyModule,
    NgbModule,
    OwlDateTimeModule, 
    OwlNativeDateTimeModule,
  ],
  exports: [
    PopupDialogComponent,
    PopupDialogHallComponent,
    PopupDialogDeliveryComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'ru-RU' },
    {provide: OWL_DATE_TIME_LOCALE, useValue: 'ru'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
