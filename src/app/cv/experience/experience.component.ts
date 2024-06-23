import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Experiences } from '../../../types';
import { getMonthName } from '../../../utils';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
})
export class ExperienceComponent {
  @Input() experienceData!: Experiences;

  getMonthName = getMonthName;
}
