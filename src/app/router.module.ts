import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { GroceryitemsComponent } from './groceryitems/groceryitems.component';


const routes: Routes = [
  {path : '', component: HomeComponent, pathMatch: 'full'},
  {path : 'home', component: HomeComponent, pathMatch: 'full'},
  {path: 'list', component: GroceryitemsComponent},
  { path: '**', component: HomeComponent }

]


@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouterModule { }
