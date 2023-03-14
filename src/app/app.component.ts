import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  products = [
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
