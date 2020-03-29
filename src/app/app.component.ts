import {Component} from '@angular/core';
import {CartShopService} from "./services/cart-shop.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  items = [];

  constructor(public CartShopService: CartShopService) {
    this.items = this.CartShopService.items
  }

}
