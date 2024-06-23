import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Educations } from '../../../types';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
})
export class EducationComponent {
  @Input() educationData!: Educations;
}
