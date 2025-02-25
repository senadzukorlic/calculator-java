import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'app-display',
  imports: [],
  templateUrl: './display.component.html',
  styleUrl: './display.component.css',
})
export class DisplayComponent {
  @Input() number: string = '0';
  @Output() change = new EventEmitter<string>();

  onClick(button: string) {
    this.change.emit((this.number = button));
  }
}
