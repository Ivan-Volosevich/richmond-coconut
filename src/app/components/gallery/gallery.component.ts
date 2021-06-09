import { Component, OnInit } from '@angular/core';
import { Lightbox, IAlbum} from 'ngx-lightbox';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  value: string = 'gallery-nav1';

  public albums: Array<IAlbum> = [];
  private _album: Array<any> = [];
  constructor(private _lightbox: Lightbox) {
    for (let i = 1; i <= 17; i++) {
      const src = './assets/gallery-img-' + i + '.jpg';
      const caption = '' + i + ' / 18';
      const thumb = './assets/gallery-img-' + i + '-min.jpg';
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

  ngOnInit(): void {}


}
