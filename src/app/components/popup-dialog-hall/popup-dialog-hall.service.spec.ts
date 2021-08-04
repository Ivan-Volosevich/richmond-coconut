import { TestBed } from '@angular/core/testing';

import { PopupDialogHallService } from './popup-dialog-hall.service';

describe('PopupDialogHallService', () => {
  let service: PopupDialogHallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PopupDialogHallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
