import { Component, computed, inject } from '@angular/core';
import { LanguageService } from '../../../services/language.service';

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  templateUrl: './language-switcher.component.html',
  styleUrl: './language-switcher.component.scss',
})
export class LanguageSwitcherComponent {
  private readonly languageService = inject(LanguageService);

  protected readonly currentLanguage = this.languageService.getCurrentLanguage();

  protected flag = computed(() => {
    const language = this.languageService.getCurrentLanguage() === 'en' ? 'nl' : 'gb';
    return `assets/flags/${language}.svg`;
  });

  protected toggleLanguage(): void {
    const currentLang = this.languageService.getCurrentLanguage();
    this.languageService.setCurrentLanguage(currentLang === 'en' ? 'nl' : 'en');
  }
}
