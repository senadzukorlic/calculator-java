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
    } else if (
      this.currentNumber === '0' &&
      value !== '.' &&
      value !== '+' &&
      value !== '-' &&
      value !== 'x' &&
      value !== '*' &&
      value !== '/' &&
      value !== '÷' &&
      value !== 'c' &&
      value !== '='
    ) {
      this.currentNumber = value;
    } else {
      this.currentNumber += value;
    }

    let expression = this.currentNumber.slice(0, -1);
    let parts = expression.split(/([\+\-\*\/])/);

    let leftValue = Number(parts[0]);
    let operator = parts[1];
    let rightValue = Number(parts[2]);

    let result: number = 0;
    switch (operator) {
      case '+':
        result = leftValue + rightValue;
        break;
      case '-':
        result = leftValue - rightValue;
        break;
      case 'x':
      case '*':
        result = leftValue * rightValue;
        break;
      case '/':
      case '÷':
        result = leftValue / rightValue;
        break;
    }

    if (value === '=') {
      this.currentNumber = result.toString();
    }
  }
}
