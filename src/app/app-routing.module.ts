import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainPageComponent} from "./main-page/main-page.component";
import {ShopingCartComponent} from "./shoping-cart/shoping-cart.component";
import {FavouritesPageComponent} from "./favourites-page/favourites-page.component";


const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'shoping-cart', component: ShopingCartComponent},
  {path: 'favourites', component:FavouritesPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
