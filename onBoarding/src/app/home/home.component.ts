import { IStep } from './../interfaces/i-step';
import { Component } from '@angular/core';
import { StepsService } from '../services/steps.service';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  steps: IStep[];

  constructor(private stepsService: StepsService) {
    this.steps = this.stepsService.getSteps();
  }
}
