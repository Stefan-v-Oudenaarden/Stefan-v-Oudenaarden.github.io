import { Component, Input } from '@angular/core';
import { Technology } from './tech-badge.interface';

@Component({
  selector: 'app-tech-badge',
  standalone: true,
  templateUrl: './tech-badge.component.html',
  styleUrl: './tech-badge.component.scss'
})
export class TechBadgeComponent {
  @Input({ required: true }) technology!: Technology;
}
