import { Component, Input } from '@angular/core';
import { Profile } from '../../../types';

@Component({
  selector: 'app-intro',
  standalone: true,
  templateUrl: './intro.component.html',
})
export class IntroComponent {
  @Input() profileData!: Profile;
}
