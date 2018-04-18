import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { GroceryitemsComponent } from './groceryitems/groceryitems.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { AppRouterModule } from './/router.module';
import { GroceryitemsService } from './groceryitems/groceryitems.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GroceryitemDetailComponent } from './groceryitem-detail/groceryitem-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    GroceryitemsComponent,
    NavBarComponent,
    HomeComponent,
    GroceryitemDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [GroceryitemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
