import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input() sign: string = '';
  @Input() bgColor: string = 'white';
  @Input() width: string = '6.5vw';
  @Input() textColor: string = 'black';
  @Output() buttonClick = new EventEmitter<string>();
  // @Output() operationClick = new EventEmitter<string>();

  onClick() {
    this.buttonClick.emit(this.sign);
    // this.operationClick.emit(this.sign);
  }
}
