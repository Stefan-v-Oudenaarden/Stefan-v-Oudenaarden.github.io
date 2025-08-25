import { Injectable, signal, computed } from '@angular/core';
import { Skill } from '../components/cards/skill-card/skill-card.interface';
import { Project } from '../components/cards/project-card/project-card.interface';

export interface Developer {
  name: string;
  title: string;
  description: string;
  githubUrl: string;
  linkedinUrl: string;
  email: string;
}

export interface Translations {
  developer: Developer;
  skills: Skill[];
  projects: Project[];
  aboutContent: string[];
}

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private readonly storageKey = 'lang';
  private currentLanguage = signal<'en' | 'nl'>(
    this.getInitialLanguage()
  );

  private getInitialLanguage(): 'en' | 'nl' {
    // First check localStorage
    if (typeof localStorage !== 'undefined') {
      const storedLang = localStorage.getItem(this.storageKey);
      if (storedLang === 'en' || storedLang === 'nl') {
        return storedLang;
      }
    }

    // Then check browser language
    if (typeof navigator !== 'undefined') {
      const browserLang = navigator.language || navigator.languages?.[0];
      return browserLang?.startsWith('nl') ? 'nl' : 'en';
    }

    return 'en'; // Final fallback
  }

  private translations: Record<'en' | 'nl', Translations> = {
    en: {
      developer: {
        name: 'Stefan van Oudenaarden',
        title: 'Frontend Developer',
        description:
          'Frontend Developer who works flexibly, attentively and independently with strong experience in Angular and C# development. Experienced in rapidly developing prototypes and iterative development cycles using Scrum methodology to translate ideas into working solutions.',
        githubUrl: 'https://github.com/Stefan-v-Oudenaarden',
        linkedinUrl: 'https://www.linkedin.com/in/s-v-oudenaarden/',
        email: 's.oudenaarden+gh.en@gmail.com',
      },
      skills: [
        {
          icon: '💻',
          title: 'Frontend Development',
          description: 'Building responsive and interactive user interfaces with modern frameworks like Angular, ASP.net and Blazor.',
        },
        {
          icon: '⚙️',
          title: 'Backend Development',
          description: 'Developing robust server-side applications with C#, Python and creating RESTful APIs.',
        },
        {
          icon: '✨',
          title: 'AI Technologies',
          description: 'Working with state of the art AI solutions through platforms like AWS Bedrock. Responsible AI assisted development. Experienced with creating mult-step AI systems.',
        },
        {
          icon: '🚅',
          title: 'Rapid Prototyping',
          description: ' Developing interactive UI prototypes with Angular and Ionic to test ideas and gather feedback early.',
        },
      ],
      projects: [
        {
          title: 'Silver Chains',
          description: 'Silver Chains is a Cyberchef inspired text processing application. It lets you chain simple operations together into complex solutions.',
          technologies: ['Angular', 'Ionic', 'Typescript', 'Node.js'],
          demoUrl: 'https://stefan-v-oudenaarden.github.io/Silver-Chains/',
          sourceUrl: 'https://github.com/Stefan-v-Oudenaarden/Silver-Chains',
          imagePath: 'assets/projects/silver-chains/screenshot.png',
        },
        {
          title: 'Bonsai',
          description: 'Bonsai is a series of random text generators.',
          technologies: ['Blazor WASM', 'Tailwind', 'C#'],
          demoUrl: 'https://stefan-v-oudenaarden.github.io/Bonsai/',
          sourceUrl: 'https://github.com/Stefan-v-Oudenaarden/Bonsai',
          imagePath: 'assets/projects/bonsai/screenshot.png',
        },
      ],
      aboutContent: [
        'I am a Frontend Developer with experience in Angular and C# development. My interest in technology is driven by enjoying the process of translating ideas into working solutions through rapid prototyping and iterative development cycles.',
        'I have worked on developing multiple web applications, including AI-powered systems, chat applications, document management tools, and audio processing applications. I am comfortable working through the entire development lifecycle, from gathering feedback from internal testers to implementing features, managing PR merges, builds, testing, and production deployments.',
        'I have practical experience with integrating AI technologies into web applications, particularly through platforms like AWS Bedrock. I adapt well to new technologies and project requirements, and I am comfortable working in Scrum environments. My approach combines structural thinking with complexity management to tackle challenging projects while maintaining code quality and user experience.',
      ],
    },
    nl: {
      developer: {
        name: 'Stefan van Oudenaarden',
        title: 'Frontend Developer',
        description:
          'Frontend Developer die flexibel, aandachtig en zelfstandig werkt met sterke ervaring in Angular en C# development. Ervaring in het snel ontwikkelen van prototypes en iteratieve ontwikkelcycli met behulp van Scrum methodologie om ideeën naar werkende oplossingen te vertalen.',
        githubUrl: 'https://github.com/Stefan-v-Oudenaarden',
        linkedinUrl: 'https://www.linkedin.com/in/s-v-oudenaarden/',
        email: 's.oudenaarden+gh.nl@gmail.com',
      },
      skills: [
        {
          icon: '💻',
          title: 'Frontend Development',
          description: 'Bouwen van responsieve en interactieve gebruikersinterfaces met moderne frameworks zoals Angular, ASP.net en Blazor.',
        },
        {
          icon: '⚙️',
          title: 'Backend Development',
          description: "Ontwikkelen van robuuste server-side applicaties met C#, Python en het maken van RESTful API's.",
        },
        {
          icon: '✨',
          title: 'AI Technologies',
          description:
            'Werken met geavanceerde AI-oplossingen via platforms zoals AWS Bedrock. Verantwoordelijke AI-ondersteunde ontwikkeling. Ervaring met het creëren van AI-systemen met meerdere stappen.',
        },
        {
          icon: '🚅',
          title: 'Rapid Prototyping',
          description: 'Ontwikkelen van interactieve UI-prototypes met Angular en Ionic om ideeën vroeg te testen en feedback te verzamelen.',
        },
      ],
      projects: [
        {
          title: 'Silver Chains',
          description: 'Silver Chains is een Cyberchef geïnspireerde tekstverwerkingsapplicatie. Het laat je eenvoudige bewerkingen aan elkaar koppelen tot complexe oplossingen.',
          technologies: ['Angular', 'Ionic', 'Typescript', 'Node.js'],
          demoUrl: 'https://stefan-v-oudenaarden.github.io/Silver-Chains/',
          sourceUrl: 'https://github.com/Stefan-v-Oudenaarden/Silver-Chains',
          imagePath: 'assets/projects/silver-chains/screenshot.png',
        },
        {
          title: 'Bonsai',
          description: 'Bonsai is een verzameling willekeurige tekstgeneratoren.',
          technologies: ['Blazor WASM', 'Tailwind', 'C#'],
          demoUrl: 'https://stefan-v-oudenaarden.github.io/Bonsai/',
          sourceUrl: 'https://github.com/Stefan-v-Oudenaarden/Bonsai',
          imagePath: 'assets/projects/bonsai/screenshot.png',
        },
      ],
      aboutContent: [
        'Ik ben een Frontend Developer met ervaring in Angular en C# development. Mijn interesse in technologie wordt gedreven door het plezier in het proces van het vertalen van ideeën naar werkende oplossingen door middel van rapid prototyping en iteratieve ontwikkelcycli.',
        'Ik heb gewerkt aan het ontwikkelen van meerdere webapplicaties, waaronder AI-aangedreven systemen, chat applicaties, document management tools en audio processing applicaties. Ik voel me comfortabel bij het werken door de gehele development lifecycle, van het verzamelen van feedback van interne testers tot het implementeren van features, het beheren van PR merges, builds, testing en production deployments.',
        'Ik heb praktische ervaring met het integreren van AI-technologieën in webapplicaties, met name via platforms zoals AWS Bedrock. Ik pas me goed aan nieuwe technologieën en projectvereisten aan, en ik voel me comfortabel bij het werken in Scrum omgevingen. Mijn aanpak combineert structureel denkvermogen met complexiteitsbeheersing om uitdagende projecten aan te pakken terwijl ik codekwaliteit en gebruikerservaring behoud.',
      ],
    },
  };

  setCurrentLanguage(lang: 'en' | 'nl') {
    this.currentLanguage.set(lang);
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(this.storageKey, lang);
    }
  }

  getCurrentLanguage() {
    return this.currentLanguage();
  }

  getDeveloper = computed(() => this.translations[this.currentLanguage()].developer);
  getSkills = computed(() => this.translations[this.currentLanguage()].skills);
  getProjects = computed(() => this.translations[this.currentLanguage()].projects);
  getAboutContent = computed(() => this.translations[this.currentLanguage()].aboutContent);
}
