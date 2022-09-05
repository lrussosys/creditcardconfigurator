import { Component, Input, OnInit } from '@angular/core';
import { colors_palette } from '../../utils/constants/constants';
@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.css'],
})
export class CreditCardComponent implements OnInit {
  color = colors_palette
  @Input ('backgroundFooter') backgroundFooter: any;
  @Input ('backgroundHeader') backgroundHeader: any;
  @Input ('patternHeader') patternHeader: any;
  @Input ('pattern') pattern:boolean = false



  constructor() {}

  ngOnInit(): void {}
}
