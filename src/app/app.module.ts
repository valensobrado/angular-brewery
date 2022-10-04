import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BeerListComponent } from './beer-list/beer-list.component';
import { BeerCartComponent } from './beer-cart/beer-cart.component';

import { FormsModule } from '@angular/forms';
import { BreweryAboutComponent } from './brewery-about/brewery-about.component';
import { BreweryBeersComponent } from './brewery-beers/brewery-beers.component';

@NgModule({
  declarations: [
    AppComponent,
    BeerListComponent,
    BeerCartComponent,
    BreweryAboutComponent,
    BreweryBeersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
