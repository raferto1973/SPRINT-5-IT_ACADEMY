import { IStep } from './../../interfaces/i-step';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-escena',
  standalone: true,
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.css']
})
export class EscenaComponent {
  @Input() step!: IStep;
}
