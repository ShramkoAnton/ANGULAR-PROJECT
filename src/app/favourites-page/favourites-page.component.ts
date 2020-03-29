import { Component } from '@angular/core';
import {CartShopService} from "../services/cart-shop.service";

@Component({
  selector: 'app-favourites-page',
  templateUrl: './favourites-page.component.html',
  styleUrls: ['./favourites-page.component.scss']
})
export class FavouritesPageComponent {

  constructor(private CartShopService: CartShopService) { }

  get favourites() {
    return this.CartShopService.getFavourites();
  }

  unliked(favorId: number) {
    this.CartShopService.deleteFav(favorId);
  }
}
