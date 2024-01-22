import { IStep } from './../interfaces/i-step';
import { Component } from '@angular/core';
import { StepsService } from '../services/steps.service';
import { EscenaComponent } from '../escena/escena.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [EscenaComponent],
})
export class HomeComponent {
  steps: IStep[] = [];

  constructor(private stepsService: StepsService) {
    this.steps = this.stepsService.getSteps();
  }
} 
