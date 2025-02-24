import { Component } from '@angular/core';
import { ParentComponent } from './parent/parent.component';
@Component({
  selector: 'app-main',
  imports: [ParentComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {}
