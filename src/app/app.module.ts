import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { OwlModule } from 'ngx-owl-carousel';
import { AppRoutingModule } from './app-routing.module';
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
import { BanquetHallFirstComponent } from './components/banquet-hall-first/banquet-hall-first.component';
import { BanquetHallSecondComponent } from './components/banquet-hall-second/banquet-hall-second.component';
import { GallerySliderFirstComponent } from './components/gallery-slider-first/gallery-slider-first.component';
import { GallerySliderSecondComponent } from './components/gallery-slider-second/gallery-slider-second.component';
import { GallerySliderThirdComponent } from './components/gallery-slider-third/gallery-slider-third.component';

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
    BanquetHallFirstComponent,
    BanquetHallSecondComponent,
    GallerySliderFirstComponent,
    GallerySliderSecondComponent,
    GallerySliderThirdComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OwlModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
