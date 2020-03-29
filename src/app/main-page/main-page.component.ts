import { Component, OnInit, } from '@angular/core';
import {ProductsService} from "../services/products.service";
import {CartShopService} from "../services/cart-shop.service";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {

  products = [];

  constructor(public productsService: ProductsService,
              public cartShopService: CartShopService) {}

  ngOnInit(): void {
    this.productsService
      .getProducts()
      .subscribe(response => {
        this.products = response;
        }
      );
  }

  setCurrentProduct(product) {
    this.cartShopService.currentProduct = product;// как товар отсюда летит дальше ?
  }

  addToFavourites(product) {
    this.cartShopService.currentProduct = product;
    this.cartShopService.addToBests();
  }
}
