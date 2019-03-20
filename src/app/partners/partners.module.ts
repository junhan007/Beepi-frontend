import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartnersRoutingModule } from './partners-routing.module';
import { PartnersListComponent } from './partners-list/partners-list.component';
import {MatTabsModule} from '@angular/material/tabs';
import { SupportedComponent } from './supported/supported.component';
import { EndosementsComponent } from './endosements/endosements.component';

@NgModule({
  declarations: [PartnersListComponent, SupportedComponent, EndosementsComponent],
  imports: [
    CommonModule,
    PartnersRoutingModule,
    MatTabsModule
  ]
})
export class PartnersModule { }
