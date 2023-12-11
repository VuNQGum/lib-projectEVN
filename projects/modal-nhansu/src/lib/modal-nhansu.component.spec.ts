import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalNhansuComponent } from './modal-nhansu.component';

describe('ModalNhansuComponent', () => {
  let component: ModalNhansuComponent;
  let fixture: ComponentFixture<ModalNhansuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalNhansuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalNhansuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
