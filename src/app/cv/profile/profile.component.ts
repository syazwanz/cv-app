import { Component, Input } from '@angular/core';
import { Profile } from '../../../types';

@Component({
  selector: 'app-profile',
  standalone: true,
  templateUrl: './profile.component.html',
})
export class ProfileComponent {
  @Input() profileData!: Profile;
}
