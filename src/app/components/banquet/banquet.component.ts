import { Component, OnInit } from '@angular/core';
import { Lightbox, IAlbum} from 'ngx-lightbox';
import { MatDialog } from '@angular/material/dialog';
import { PopupDialogHallComponent } from '../popup-dialog-hall/popup-dialog-hall.component';

@Component({
  selector: 'app-banquet',
  templateUrl: './banquet.component.html',
  styleUrls: ['./banquet.component.scss']
})
export class BanquetComponent implements OnInit {

  public albums: Array<IAlbum> = [];
  private _album: Array<any> = [];
  constructor(public dialog: MatDialog, private _lightbox: Lightbox) {
    for (let i = 1; i <= 4; i++) {
      const src = './assets/banquet-img-' + i + '.png';
      const caption = '' + i + ' / 4';
      const thumb = './assets/banquet-img-' + i + '.png';
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

  openDialogHall() {
    this.dialog.open(PopupDialogHallComponent);
  }

  ngOnInit(): void {
  }
}
