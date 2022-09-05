import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardsService } from '../shared/services/cards.service';
import {
  colors_palette_footer,
  colors_palette_header,
} from '../shared/utils/constants/constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  colors = colors_palette_footer;
  cards: any = [];
  selectedFooterColor: string = this.colors[0];
  selectedHeaderColor: string = this.colors[2];
  selectedPattern!: any;
  constructor(private cardsService: CardsService) {}

  ngOnInit(): void {
    console.log('colori', this.colors);
  }

  getSelectedFooterColor(e: any) {
    this.selectedFooterColor = e;
  }

  getSelectedHeaderColor(e: any) {
    this.selectedHeaderColor = e;
    console.log(e);
  }

  getSelectedPattern(p: any) {
    this.selectedPattern = p;
  }

  saveCard() {
    console.log(this.selectedFooterColor);
    console.log(this.selectedPattern);
    console.log(this.selectedHeaderColor);

    let card = {
      headerColor: this.selectedHeaderColor,
      headerPattern: this.selectedPattern,
      footerColor: this.selectedFooterColor,
    };

    this.cards.push(card);
    console.log(this.cards);

    this.cardsService.cards.push(card);
    // this.cardsService.saveCards(this.cards)
  }
}
