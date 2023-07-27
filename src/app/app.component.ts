import { Component } from '@angular/core';

interface Product {
  name: string,
  price: number,
  img: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  
  products: Product[] = [
    {
      name: "Bad Bunny",
      price: 100,
      img: "bb.png"
    },
    {
      name: "JBalvin",
      price:200,
      img: "jbv.png"
    },
    {
      name: "Nicky Jam",
      price: 300,
      img: "jb.png"
    },
    {
      name: "Ozuna",
      price: 400,
      img: "oz.png"
    }
  ]
}
