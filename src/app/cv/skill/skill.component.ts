import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Skills } from '../../../types';

@Component({
  selector: 'app-skill',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skill.component.html',
})
export class SkillComponent {
  @Input() skillData!: Skills;
}
