import { Component } from '@angular/core';
import { ButtonComponent } from './button/button.component';
@Component({
  selector: 'app-buttons',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.css',
})
export class ButtonsComponent {}
