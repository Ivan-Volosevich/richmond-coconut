import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GallerySliderFirstComponent } from './gallery-slider-first.component';

describe('GallerySliderFirstComponent', () => {
  let component: GallerySliderFirstComponent;
  let fixture: ComponentFixture<GallerySliderFirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GallerySliderFirstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GallerySliderFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
