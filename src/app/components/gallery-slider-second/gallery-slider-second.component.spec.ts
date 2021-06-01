import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GallerySliderSecondComponent } from './gallery-slider-second.component';

describe('GallerySliderSecondComponent', () => {
  let component: GallerySliderSecondComponent;
  let fixture: ComponentFixture<GallerySliderSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GallerySliderSecondComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GallerySliderSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
