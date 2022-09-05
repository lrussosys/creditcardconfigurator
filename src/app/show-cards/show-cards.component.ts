import { Component, OnInit } from '@angular/core';
import { CardsService } from '../shared/services/cards.service';

@Component({
  selector: 'app-show-cards',
  templateUrl: './show-cards.component.html',
  styleUrls: ['./show-cards.component.css'],
})
export class ShowCardsComponent implements OnInit {
  constructor(private cardsService: CardsService) {}
  cards: any;
  truePattern:boolean = false
  parseJson: any;

  ngOnInit(): void {
    this.getCards();
    const jsonRes = localStorage.getItem('card');
    // JSON.parse(localStorage.getItem('card'))
     this.parseJson = jsonRes ?  JSON.parse(jsonRes) : undefined
    console.log(this.parseJson)
  }

  getCards() {
    // this.cards = this.parseJson;
    if(this.parseJson?.headerPattern !== ''){
      this.truePattern = true
    }
    console.log(this.cards);
  }
}
