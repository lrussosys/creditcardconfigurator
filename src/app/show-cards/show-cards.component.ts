import { Component, OnInit } from '@angular/core';
import { CardsService } from '../shared/services/cards.service';

@Component({
  selector: 'app-show-cards',
  templateUrl: './show-cards.component.html',
  styleUrls: ['./show-cards.component.css'],
})
export class ShowCardsComponent implements OnInit {
  constructor(private cardsService: CardsService) {}
  cards: any = [];
  truePattern:boolean = false
  ngOnInit(): void {
    this.getCards();
  }

  getCards() {
    this.cards = this.cardsService?.cards;
    if(this.cards.headerPattern !== ''){
      this.truePattern = true
    }
    console.log(this.cards);
  }
}
