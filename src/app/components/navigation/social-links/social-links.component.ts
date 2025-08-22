import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SocialLink } from './social-links.interface';

@Component({
  selector: 'app-social-links',
  standalone: true,
  templateUrl: './social-links.component.html',
  styleUrl: './social-links.component.scss'
})
export class SocialLinksComponent {
  @Input({ required: true }) socialLinks!: SocialLink[];
  @Output() linkClick = new EventEmitter<SocialLink>();

  handleClick(link: SocialLink, event: Event) {
    event.preventDefault();
    this.linkClick.emit(link);
  }
}
