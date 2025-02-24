import { Component } from '@angular/core';

import { ButtonsComponent } from '../buttons/buttons.component';
import { DisplayComponent } from '../display/display.component';
@Component({
  selector: 'app-parent',
  imports: [DisplayComponent, ButtonsComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css',
})
export class ParentComponent {}
