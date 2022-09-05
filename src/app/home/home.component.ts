import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardsService } from '../shared/services/cards.service';
import { colors_palette } from '../shared/utils/constants/constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  selectedFooterColor!: string;
  selectedHeaderColor!: string;
  selectedPattern!: any;
  color_default = colors_palette;
  truePattern: boolean = false

  cards: any = [];
  constructor(private cardsService: CardsService) {}

  ngOnInit(): void {}

  getSelectedFooterColor(e: any) {
    this.selectedFooterColor = e;

  }

  getSelectedHeaderColor(e: any) {
    this.selectedHeaderColor = e;
    this.truePattern = false
  }

  getSelectedPattern(p: any) {
  this.truePattern = true

    this.selectedPattern = p;
  }

  saveCard() {
    console.log(this.selectedFooterColor);
    console.log(this.selectedPattern);
    console.log(this.selectedHeaderColor);

    let card = {};

    if (this.selectedPattern !== undefined) {
    card = {
        headerPattern: this.selectedPattern,
        footerColor: this.selectedFooterColor,
        headerColor: ''
      };
    }else{
      card = {
        headerColor: this.selectedHeaderColor,
        footerColor: this.selectedFooterColor,
        headerPattern: ''
      };
    }

    this.cards.push(card);
    console.log(this.cards);

    this.cardsService.cards.push(card);
    // this.cardsService.saveCards(this.cards)
  }
}
