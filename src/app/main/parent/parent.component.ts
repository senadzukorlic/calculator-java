import { Component } from '@angular/core';

import { ButtonsComponent } from '../buttons/buttons.component';
import { DisplayComponent } from '../display/display.component';
@Component({
  selector: 'app-parent',
  imports: [DisplayComponent, ButtonsComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css',
})
export class ParentComponent {
  currentNumber: string = '0';

  handleButtonPress(value: string) {
    if (value === 'c') {
      this.currentNumber = '0';
    } else if (this.currentNumber === '0' && value !== '.') {
      this.currentNumber = value;
    } else {
      this.currentNumber += value;
    }
  }
}
