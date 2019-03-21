import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import  { TeamDescriptionComponent } from './about-us/team-description/team-description.component';
import  { PartnersListComponent } from './partners/partners-list/partners-list.component';
import  { ProductListComponent } from './products/product-list/product-list.component';
import { IntroComponent } from './home/intro/intro.component';
import {SupportedComponent} from './partners/supported/supported.component';
import {EndosementsComponent} from './partners/endosements/endosements.component';



const routes: Routes = [
  {path: '' , redirectTo: 'home' , pathMatch:'full' },
  {path: 'aboutus', component: TeamDescriptionComponent},
  {path: 'products', component: ProductListComponent},
  {path: 'partners', component: PartnersListComponent},
  {path: 'home', component : IntroComponent},
  {path: 'supportedby', component : SupportedComponent},
  {path: 'endosements', component : EndosementsComponent},
  {path: '**' , redirectTo: 'home' , pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents= [TeamDescriptionComponent , ProductListComponent, PartnersListComponent, IntroComponent, SupportedComponent,EndosementsComponent]
