import { TestBed } from '@angular/core/testing';

import { ModalNhansuService } from './modal-nhansu.service';

describe('ModalNhansuService', () => {
  let service: ModalNhansuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalNhansuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
