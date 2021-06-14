import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupDialogDeliveryComponent } from './popup-dialog-delivery.component';

describe('PopupDialogDeliveryComponent', () => {
  let component: PopupDialogDeliveryComponent;
  let fixture: ComponentFixture<PopupDialogDeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupDialogDeliveryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupDialogDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
