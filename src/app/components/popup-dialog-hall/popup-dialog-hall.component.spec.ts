import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupDialogHallComponent } from './popup-dialog-hall.component';

describe('PopupDialogHallComponent', () => {
  let component: PopupDialogHallComponent;
  let fixture: ComponentFixture<PopupDialogHallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupDialogHallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupDialogHallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
