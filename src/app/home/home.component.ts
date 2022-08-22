import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  selectedFooterColor!: string;
  selectedHeaderColor!: string;
  selectedPattern!: any;

  cards: any = [];
  constructor() {}

  ngOnInit(): void {}

  getSelectedFooterColor(e: any) {
    this.selectedFooterColor = e;
  }

  getSelectedHeaderColor(e: any) {
    this.selectedHeaderColor = e;
  }

  getSelectedPattern(p: any) {
    this.selectedPattern = p;
  }

  saveCard() {
    console.log(this.selectedFooterColor);
    console.log(this.selectedPattern);
    console.log(this.selectedHeaderColor);

    let card = {
        headerColor: this.selectedFooterColor,
        headerPattern: this.selectedPattern,
        footerColor: this.selectedFooterColor
    }

    this.cards.push(card)
    console.log(this.cards)
  }
}
