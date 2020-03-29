import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ShopingCartComponent } from './shoping-cart/shoping-cart.component';

import {InMemoryWebApiModule} from 'angular-in-memory-web-api'
import {InMemoryDataService} from './in-memory-data.service'
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { ModalComponent } from './modal/modal.component';
import {NgbAlertModule} from "@ng-bootstrap/ng-bootstrap";
import { FavouritesPageComponent } from './favourites-page/favourites-page.component';


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ShopingCartComponent,
    ModalComponent,
    FavouritesPageComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        InMemoryWebApiModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        ReactiveFormsModule,
        NgbAlertModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
