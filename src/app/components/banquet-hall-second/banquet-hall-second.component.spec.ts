import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BanquetHallSecondComponent } from './banquet-hall-second.component';

describe('BanquetHallSecondComponent', () => {
  let component: BanquetHallSecondComponent;
  let fixture: ComponentFixture<BanquetHallSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BanquetHallSecondComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BanquetHallSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
