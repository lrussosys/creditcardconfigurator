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

  colors = colors_palette.map((c) => ({ color: c, selected: false }));
  patterns = [
    {
      pattern:
        'linear-gradient(135deg, #444cf7 25%, transparent 25%), linear-gradient(225deg, #444cf7 25%, transparent 25%), linear-gradient(45deg, #444cf7 25%, transparent 25%), linear-gradient(315deg, #444cf7 25%, #e5e5f7 25%)',
    },
    {
      pattern:
        'linear-gradient(30deg, #444cf7 12%, transparent 12.5%, transparent 87%, #444cf7 87.5%, #444cf7), linear-gradient(150deg, #444cf7 12%, transparent 12.5%, transparent 87%, #444cf7 87.5%, #444cf7), linear-gradient(30deg, #444cf7 12%, transparent 12.5%, transparent 87%, #444cf7 87.5%, #444cf7), linear-gradient(150deg, #444cf7 12%, transparent 12.5%, transparent 87%, #444cf7 87.5%, #444cf7), linear-gradient(60deg, #444cf777 25%, transparent)',
    },
    {
      pattern:
        'repeating-radial-gradient( circle at 0 0, transparent 0, #e5e5f7 10px ), repeating-linear-gradient( #444cf755, #444cf7 )',
    },
  ];

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
