import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GallerySliderThirdComponent } from './gallery-slider-third.component';

describe('GallerySliderThirdComponent', () => {
  let component: GallerySliderThirdComponent;
  let fixture: ComponentFixture<GallerySliderThirdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GallerySliderThirdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GallerySliderThirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
