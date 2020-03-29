import {Injectable} from "@angular/core";
import {Product} from "../models/product.model";

@Injectable({
  providedIn: "root"
})
export class CartShopService {

  items: Product[] = [];
  favourites: Product[] = [];
  currentProduct: Product;

  constructor() {}

  addToCart() {
    this.items.push(this.currentProduct);
  }

  addToBests() {
    this.favourites.push(this.currentProduct);
  }

  getFavourites(): Product[] {
    return this.favourites;
  }

  deleteFav(favorId: number) {
    const favItem =  this.favourites.find(item => item.id === favorId);
    const favIdx =  this.favourites.indexOf(favItem);
    this.favourites.splice(favIdx, 1)

  }


  deleteElement(basketId: number) {
    const basketItem = this.items.find(item => item.id === basketId);
    const basketIdx = this.items.indexOf(basketItem);
    this.items.splice(basketIdx, 1)
  }
  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  totalPrice(arr) {
    return this.items.map(x => x.cost).reduce((a, b) => a + b, 0);
  }


}
