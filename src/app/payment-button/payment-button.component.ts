import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-payment-button',
  templateUrl: './payment-button.component.html',
  styleUrls: ['./payment-button.component.scss']
})
export class PaymentButtonComponent {
  @Input() type: string = '';

  getPaymentTypeClass(type:string): string {
    switch(type){
      case 'paypal': return 'paypal'
      case 'card': return 'card'
      default: return 'paypal'
    }
  }

  getPaymentButtonText(type:string): string {
    switch(type){
      case 'paypal': return ''
      case 'card': return 'Debit/Credit Card'
      default: return ''
    }
  }
}
