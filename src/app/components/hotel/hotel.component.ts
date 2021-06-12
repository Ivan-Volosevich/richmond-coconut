import { Component, OnInit } from '@angular/core';
import { Lightbox, IAlbum} from 'ngx-lightbox';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss']
})
export class HotelComponent implements OnInit {

  public albums: Array<IAlbum> = [];
  private _album: Array<any> = [];
  constructor(private _lightbox: Lightbox) {
    for (let i = 1; i <= 4; i++) {
      const src = './assets/hotel-img-' + i + '.png';
      const caption = '' + i + ' / 4';
      const thumb = './assets/hotel-img-' + i + '-min.png';
      const album = {
         src: src,
         caption: caption,
         thumb: thumb
      };

      this.albums.push(album);
    }
  }

  open(index: number): void {
    // open lightbox
    this._lightbox.open(this.albums, index);
  }

  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }

  ngOnInit(): void {
  }

}
