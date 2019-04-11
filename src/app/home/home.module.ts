import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { IntroComponent } from './intro/intro.component';
import { MatButtonModule } from '@angular/material';



@NgModule({
  declarations: [IntroComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatButtonModule
  ]
})
export class HomeModule { }
