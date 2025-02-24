import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input({ required: true }) sign!: string;
  @Input() bgColor: string = 'white'; // Default boja ako nije prosleđena
  @Input() width: string = '6.5vw'; // Default širina ako nije prosleđena
  @Input() textColor: string = 'black';
}

//#D4D4D4 operator
