import {Component} from '@angular/core';
import {CartShopService} from "../services/cart-shop.service";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {

  constructor(private cartShopService: CartShopService){}

  addToShopBag() {
    this.cartShopService.addToCart();
  }

   get product() {
    return this.cartShopService.currentProduct;
  }

}
