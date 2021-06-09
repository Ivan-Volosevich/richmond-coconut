import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation, NgxGalleryImageSize } from '@kolkov/ngx-gallery';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  galleryOptions: NgxGalleryOptions[] = [];
  galleryImages: NgxGalleryImage[] = [];
  imageSize: NgxGalleryImageSize[] = [];

  value: string = 'gallery-nav1';

  constructor() { }

  ngOnInit(): void {
    this.galleryOptions = [
      {
        width: '600px',
        height: '400px',
        thumbnailsColumns: 6,
        imageAnimation: NgxGalleryAnimation.Slide,
        previewCloseOnClick: true
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20,
        previewCloseOnClick: true
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false,
        previewCloseOnClick: true
      }
  ];

  this.galleryImages = [
      {
          small: './assets/gallery-img-1.png',
          medium: './assets/gallery-img-1.png',
          big: './assets/gallery-img-1.png'
      },
      {
          small: './assets/gallery-img-2.png',
          medium: './assets/gallery-img-2.png',
          big: './assets/gallery-img-2.png'
      },
      {
        small: './assets/gallery-img-3.png',
        medium: './assets/gallery-img-3.png',
        big: './assets/gallery-img-3.png'
      },
      {
        small: './assets/gallery-img-4.png',
        medium: './assets/gallery-img-4.png',
        big: './assets/gallery-img-4.png'
      },
      {
        small: './assets/gallery-img-5.png',
        medium: './assets/gallery-img-5.png',
        big: './assets/gallery-img-5.png'
      },
      {
        small: './assets/gallery-img-6.png',
        medium: './assets/gallery-img-6.png',
        big: './assets/gallery-img-6.png'
      },
    ];

    // this.imageSize =[
    //   {
    //     background: contain
    //   }
    // ]
  }


}
