import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditCardComponent } from './components/credit-card/credit-card.component';
import { ThemePickerComponent } from './components/theme-picker/theme-picker.component';

@NgModule({
  declarations: [CreditCardComponent, ThemePickerComponent],
  imports: [CommonModule],
  exports: [CreditCardComponent, ThemePickerComponent],
})
export class UiKitModule {}
