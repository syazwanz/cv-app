import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Courses } from '../../../types';
import { getMonthName } from '../../../utils';

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course.component.html',
})
export class CourseComponent {
  @Input() courseData!: Courses;

  getMonthName = getMonthName;
}
