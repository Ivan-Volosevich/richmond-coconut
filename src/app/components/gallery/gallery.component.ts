import { Component, OnInit } from '@angular/core';
import { OwlCarousel } from 'ngx-owl-carousel';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  Images = [
    '../../../assets/gallery-img-1.png',
    '../../../assets/gallery-img-2.png',
    '../../../assets/gallery-img-3.png',
    '../../../assets/gallery-img-4.png',
    '../../../assets/gallery-img-5.png',
    '../../../assets/gallery-img-6.png'];

  images: any;

  value: string = 'gallery-nav1';

  constructor() { }

  ngOnInit(): void {
  }

  SlideOptions = { items: 1, dots: true, nav: true };  
  CarouselOptions = { items: 3, dots: true, nav: true };

}
