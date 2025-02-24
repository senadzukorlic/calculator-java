import { Component } from '@angular/core';
import { Output } from '@angular/core';
@Component({
  selector: 'app-display',
  imports: [],
  templateUrl: './display.component.html',
  styleUrl: './display.component.css',
})
export class DisplayComponent {
  @Output() number!: string;
}
