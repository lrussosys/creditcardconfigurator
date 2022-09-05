import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { colors_palette } from '../../utils/constants/constants';

@Component({
  selector: 'app-theme-picker',
  templateUrl: './theme-picker.component.html',
  styleUrls: ['./theme-picker.component.css'],
})
export class ThemePickerComponent implements OnInit {
  @Output('selectedFooterColorEmitter') selectedFooterColorEmitter =
    new EventEmitter();
  @Output('selectedHeaderColorEmitter') selectedHeaderColorEmitter =
    new EventEmitter();
  @Output('selectedPatternEmitter') selectedPatternEmitter = new EventEmitter();

  @Input('footerPicker') footerPicker: boolean = false;
  @Input('headerPicker') headerPicker: boolean = false;
  @Input('patternPicker') patternPicker: boolean = false;
  @Input('colorsHeader') colorsHeader: any;
  @Input('colorsFooter') colorsFooter: any;
  @Input('colorsPattern') colorsPattern: any;
  @Input('class') class: any;

  // colors = colors_palette.map((c: any) => ({ color: c, selected: false }));

  selectedFooterColor!: string;
  selectedHeaderColor!: string;
  selectedPattern!: any;

  constructor() {}

  ngOnInit(): void {}

  getFooterColor(c: any) {
    this.selectedFooterColor = c;
    console.log(this.selectedFooterColor);
    this.selectedFooterColorEmitter.emit(this.selectedFooterColor);
  }

  getHeaderColors(c: any) {
    this.selectedHeaderColor = c;
    console.log(this.selectedHeaderColor);
    this.selectedHeaderColorEmitter.emit(this.selectedHeaderColor);

  }

  getPattern(p: any) {
    this.selectedPattern = p;
    console.log(this.selectedPattern);
    this.selectedPatternEmitter.emit(this.selectedPattern);
  }
}
