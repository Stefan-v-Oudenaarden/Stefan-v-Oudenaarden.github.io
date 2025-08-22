import { Component, Input } from '@angular/core';
import { Skill } from './skill-card.interface';

@Component({
  selector: 'app-skill-card',
  standalone: true,
  templateUrl: './skill-card.component.html',
  styleUrl: './skill-card.component.scss'
})
export class SkillCardComponent {
  @Input({ required: true }) skill!: Skill;
}
