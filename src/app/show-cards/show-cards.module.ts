import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowCardsRoutingModule } from './show-cards-routing.module';
import { ShowCardsComponent } from './show-cards.component';
import { UiKitModule } from '../shared/ui-kit.module';


@NgModule({
  declarations: [
    ShowCardsComponent,
  ],
  imports: [
    CommonModule,
    ShowCardsRoutingModule,
    UiKitModule,
  ]
})
export class ShowCardsModule { }
