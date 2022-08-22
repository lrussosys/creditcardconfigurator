import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CreditCardComponent } from '../shared/components/credit-card/credit-card.component';


@NgModule({
  declarations: [
    HomeComponent,
    CreditCardComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
