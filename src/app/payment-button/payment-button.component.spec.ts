import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentButtonComponent } from './payment-button.component';

describe('PaymentButtonComponent', () => {
  let component: PaymentButtonComponent;
  let fixture: ComponentFixture<PaymentButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentButtonComponent]
    });
    fixture = TestBed.createComponent(PaymentButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
