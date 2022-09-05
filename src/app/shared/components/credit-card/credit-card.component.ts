import { Component, Input, OnInit } from '@angular/core';
import {
  colors_palette,
  colors_palette_header,
} from '../../utils/constants/constants';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.css'],
})
export class CreditCardComponent implements OnInit {
  colors = colors_palette;

  @Input('backgroundFooter') backgroundFooter: string = this.colors[0];
  @Input('backgroundHeader') backgroundHeader: string = this.colors[2];
  @Input('patternHeader') patternHeader: string | undefined;

  constructor() {}

  ngOnInit(): void {}
}
