import { Component } from '@angular/core';
import cvData from '../data';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
})
export class ProfileComponent {
  cvData = cvData;
}
