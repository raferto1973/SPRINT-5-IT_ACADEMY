import { Component, Input } from '@angular/core';
import { IStep } from '../interfaces/i-step';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-escena',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.css'],
})
export class EscenaComponent {
  @Input() steps!: IStep[];

  currentStep: number = 0;

  nextStep(): void {
    if (this.currentStep < this.steps.length - 1) {
      this.currentStep++;
    }
  }

  previousStep(): void {
    if (this.currentStep > 0) {
      this.currentStep--;
    }
  }
}
