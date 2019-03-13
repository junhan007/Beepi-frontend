import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartnersRoutingModule } from './partners-routing.module';
import { PartnersListComponent } from './partners-list/partners-list.component';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [PartnersListComponent],
  imports: [
    CommonModule,
    PartnersRoutingModule,
    MatTabsModule
  ]
})
export class PartnersModule { }
