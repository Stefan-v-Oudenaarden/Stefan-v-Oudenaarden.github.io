import { Component, signal, OnInit, computed, inject, DestroyRef } from '@angular/core';
import { TechBadgeComponent } from '../components/ui/tech-badge/tech-badge.component';
import { SkillCardComponent } from '../components/cards/skill-card/skill-card.component';
import { SocialLinksComponent } from '../components/navigation/social-links/social-links.component';
import { ProjectCardComponent } from '../components/cards/project-card/project-card.component';
import { LanguageSwitcherComponent } from '../components/ui/language-switcher/language-switcher.component';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { fromEvent } from 'rxjs';
import { LanguageService } from '../services/language.service';

import { Skill } from '../components/cards/skill-card/skill-card.interface';
import { Project } from '../components/cards/project-card/project-card.interface';
import { SocialLink } from '../components/navigation/social-links/social-links.interface';

interface NavItem {
  label: string;
  link: string;
  external?: boolean;
}

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [TechBadgeComponent, SkillCardComponent, SocialLinksComponent, ProjectCardComponent, LanguageSwitcherComponent],
})
export class HomeComponent implements OnInit {
  private readonly destroyRef = inject(DestroyRef);
  private readonly languageService = inject(LanguageService);

  // Signals for reactive state
  protected readonly title = signal('Github-Site');
  protected readonly isScrolled = signal(false);

  // Developer information
  protected readonly developer = this.languageService.getDeveloper;

  // Navigation items computed from developer info
  protected readonly navItems = computed<NavItem[]>(() => [
    { label: 'Home', link: '#home' },
    { label: 'Technologies', link: '#tech' },
    { label: 'About', link: '#about' },
    { label: 'Skills', link: '#skills' },
    { label: 'Projects', link: '#projects' },
    { label: 'Resume', link: 'assets/resume.pdf', external: true },
  ]);

  // Technology showcase
  protected readonly technologies = signal([
    {
      category: 'Languages',
      items: [
        { svgPath: 'assets/logos/languages/js.svg', name: 'JavaScript' },
        { svgPath: 'assets/logos/languages/typescript.svg', name: 'TypeScript' },
        { svgPath: 'assets/logos/languages/python.svg', name: 'Python' },
        { svgPath: 'assets/logos/languages/java.svg', name: 'Java' },
      ],
    },
    {
      category: 'Frameworks',
      items: [
        { svgPath: 'assets/logos/frameworks/react_light.svg', name: 'React' },
        { svgPath: 'assets/logos/frameworks/angular.svg', name: 'Angular' },
        { svgPath: 'assets/logos/frameworks/blazor-original-logo.svg', name: 'Blazor' },
        { svgPath: 'assets/logos/frameworks/ionic light logo blue.svg', name: 'Ionic' },
      ],
    },
    {
      category: 'Tools & Platforms',
      items: [
        { svgPath: 'assets/logos/tools/nodejs.svg', name: 'Node.js' },
        { svgPath: 'assets/logos/tools/tailwindcss.svg', name: 'Tailwind' },
        { svgPath: 'assets/logos/tools/aws_light.svg', name: 'AWS' },
      ],
    },
  ]);

  // Skills data
  protected readonly skills = this.languageService.getSkills;

  // Projects data
  protected readonly projects = this.languageService.getProjects;

  // Social links computed from developer info
  protected readonly socialLinks = computed<SocialLink[]>(() => [
    { svgPath: 'assets/logos/social/email.svg', url: `mailto:${this.developer().email}`, label: 'Email' },
    { svgPath: 'assets/logos/social/linkedin.svg', url: this.developer().linkedinUrl, label: 'LinkedIn' },
    { svgPath: 'assets/logos/social/github.svg', url: this.developer().githubUrl, label: 'GitHub' },
    { svgPath: 'assets/logos/social/pdf.svg', url: 'assets/resume.pdf', label: 'Download Resume' },
  ]);

  // About section content
  protected readonly aboutContent = this.languageService.getAboutContent;

  ngOnInit(): void {
    this.initializeScrollEffects();
  }

  private initializeScrollEffects(): void {
    fromEvent(window, 'scroll')
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => {
        this.isScrolled.set(window.scrollY > 50);
      });
  }

  protected onNavClick(item: NavItem): void {
    if (item.external) {
      window.open(item.link, '_blank');
    } else {
      const target = document.querySelector(item.link);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }

  protected onSocialClick(link: SocialLink): void {
    if (link.url.startsWith('mailto:')) {
      window.location.href = link.url;
    } else {
      window.open(link.url, '_blank');
    }
  }

  protected toggleLanguage(): void {
    const currentLang = this.languageService.getCurrentLanguage();
    this.languageService.setCurrentLanguage(currentLang === 'en' ? 'nl' : 'en');
  }
}
