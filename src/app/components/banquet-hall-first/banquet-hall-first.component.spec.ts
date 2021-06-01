import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BanquetHallFirstComponent } from './banquet-hall-first.component';

describe('BanquetHallFirstComponent', () => {
  let component: BanquetHallFirstComponent;
  let fixture: ComponentFixture<BanquetHallFirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BanquetHallFirstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BanquetHallFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
