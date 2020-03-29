import { Component} from '@angular/core';
import {CartShopService} from "../services/cart-shop.service";
import {Product} from "../models/product.model";

@Component({
  selector: 'app-shoping-cart',
  templateUrl: './shoping-cart.component.html',
  styleUrls: ['./shoping-cart.component.scss']
})
export class ShopingCartComponent {

  constructor(private CartShopService: CartShopService) {
  }

  clearBasket() {
    this.CartShopService.clearCart()
  }

  get items() {
    return this.CartShopService.getItems();
  }

  removeFromBasket(basketId: number) {
    this.CartShopService.deleteElement(basketId);
  }
}
