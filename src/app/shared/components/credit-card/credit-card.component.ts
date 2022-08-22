import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.css']
})
export class CreditCardComponent implements OnInit {
  @Input ('backgroundFooter') backgroundFooter: string | undefined;
  @Input ('backgroundHeader') backgroundHeader: string | undefined;
  @Input ('patternHeader') patternHeader: string | undefined;


  constructor() { }

  ngOnInit(): void {
  }

}
