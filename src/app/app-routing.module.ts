import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import  { TeamDescriptionComponent } from './about-us/team-description/team-description.component';
import  { PartnersListComponent } from './partners/partners-list/partners-list.component';
import  { ProductListComponent } from './products/product-list/product-list.component';
import { IntroComponent } from './home/intro/intro.component';



const routes: Routes = [
  {path: '' , redirectTo: 'home' , pathMatch:'full' },
  {path: 'aboutus', component: TeamDescriptionComponent},
  {path: 'products', component: ProductListComponent},
  {path: 'partners', component: PartnersListComponent},
  {path: 'home', component : IntroComponent},
  {path: '**' , redirectTo: 'home' , pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents= [TeamDescriptionComponent , ProductListComponent, PartnersListComponent, IntroComponent]
