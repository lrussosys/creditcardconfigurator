import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardsService } from '../shared/services/cards.service';
import {
  colors_palette,
  colors_palette_header,
} from '../shared/utils/constants/constants';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  selectedFooterColor: string = '';
  selectedHeaderColor!: string;
  selectedPattern!: any;
  color_default = colors_palette;
  truePattern: boolean = false

  cards: any = [];
  card:any;
  constructor(private cardsService: CardsService, private router: Router) {}

  ngOnInit(): void {

  }

  getSelectedFooterColor(e: any) {
    this.selectedFooterColor = e;

  }

  getSelectedHeaderColor(e: any) {
    this.selectedHeaderColor = e;
    this.truePattern = false
    this.selectedPattern = ''
  }

  getSelectedPattern(p: any) {
  this.truePattern = true
  this.selectedPattern = p;
  this.selectedHeaderColor = '';
  }

  saveCard() {
    console.log(this.selectedFooterColor);
    console.log(this.selectedPattern);
    console.log(this.selectedHeaderColor);



    if (this.selectedPattern !== '') {
    this.card = {
        headerPattern: this.selectedPattern,
        footerColor: this.selectedFooterColor,
        headerColor: ''
      };
    }else{
      this.card = {
        headerColor: this.selectedHeaderColor,
        footerColor: this.selectedFooterColor,
        headerPattern: ''
      };
    }
    // console.log(this.card)
    // this.cards.push(this.card);
    this.cardsService.cards.push(this.card);
    console.log(this.cardsService.cards);
    localStorage.setItem('card', JSON.stringify(this.cardsService.cards))
    this.router.navigate(['/show-cards'])

    // this.cardsService.saveCards(this.cards)
  }
}
