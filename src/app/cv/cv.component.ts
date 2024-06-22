import { Component } from '@angular/core';
import cvData from './data';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [CommonModule, ProfileComponent],
  templateUrl: './cv.component.html',
})
export class CvComponent {
  cvData = cvData;
}
