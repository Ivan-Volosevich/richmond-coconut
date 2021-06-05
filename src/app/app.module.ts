import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { OwlModule } from 'ngx-owl-carousel';
import { AppRoutingModule } from './app-routing.module';
import { MatDialogModule } from '@angular/material/dialog';
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OwlModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
