import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { colors_palette } from '../../utils/constants/constants';

@Component({
  selector: 'app-theme-picker',
  templateUrl: './theme-picker.component.html',
  styleUrls: ['./theme-picker.component.css'],
})
export class ThemePickerComponent implements OnInit {

    @Output('selectedColorEmitter') selectedColorEmitter = new EventEmitter();

  colors = colors_palette.map((c) => ({ color: c, selected: false }));
  selectedColor!: string;
  constructor() {}

  ngOnInit(): void {
  }

  getColor(c: any) {
    this.selectedColor = c;
    console.log(this.selectedColor);
    this.selectedColorEmitter.emit(this.selectedColor)
  }
}
