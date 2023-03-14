import { Component, OnInit, Input } from '@angular/core';

interface Product {
  name: string;
  price: number;
  img: string
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent implements OnInit {
  @Input() product!: Product;

  ngOnInit(): void {
    console.log("Product", this.product?.name);
  }

}
