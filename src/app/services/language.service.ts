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
  providedIn: 'root'
})
export class LanguageService {
  private currentLanguage = signal<'en' | 'nl'>('en');

  private translations: Record<'en' | 'nl', Translations> = {
    en: {
      developer: {
        name: 'Stefan van Oudenaarden',
        title: 'Full Stack Developer',
        description: 'Passionate developer creating innovative solutions with modern technologies. I love building scalable applications and exploring new frameworks to solve complex problems.',
        githubUrl: 'https://github.com/Stefan-v-Oudenaarden',
        linkedinUrl: 'https://www.linkedin.com/in/stefan-van-oudenaarden/',
        email: 's.oudenaarden+gh.pages@gmail.com',
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
        'Minim magna excepteur pariatur ad. Id occaecat commodo mollit laborum non et ad quis ipsum quis dolore. Culpa sit proident magna quis aliquip laborum occaecat incididunt enim. Anim do velit et ipsum eiusmod. Aliquip laborum ad aliquip quis laboris duis non mollit cillum veniam laborum cillum esse.',
        'Consectetur laborum cillum id quis voluptate incididunt qui mollit adipisicing ut. Velit aliqua non ad ea veniam ex elit veniam magna laboris voluptate magna. Veniam laboris enim aute proident ex officia. Dolore est aute cillum ad. Amet elit fugiat pariatur ullamco Lorem elit officia laboris nostrud voluptate deserunt non cillum veniam.',
        'Do cillum tempor est quis aute sint eu ut aliquip culpa exercitation. Mollit cillum ullamco in occaecat qui amet laboris et deserunt ea ipsum. Amet laborum eu ea duis incididunt aute. Nisi esse anim Lorem cupidatat qui amet amet veniam id aute est. Dolore ad laboris ipsum dolore proident officia dolore nisi mollit. Aute sunt dolor commodo laborum voluptate consectetur. Nostrud esse ullamco adipisicing deserunt anim nostrud sint sint nulla et officia ea nisi.',
      ]
    },
    nl: {
      developer: {
        name: 'Stefan van Oudenaarden',
        title: 'Full Stack Ontwikkelaar',
        description: 'Passione voor het creëren van innovatieve oplossingen met moderne technologieën. Ik bouw graag schaalbare applicaties en verken nieuwe frameworks om complexe problemen op te lossen.',
        githubUrl: 'https://github.com/Stefan-v-Oudenaarden',
        linkedinUrl: 'https://www.linkedin.com/in/stefan-van-oudenaarden/',
        email: 's.oudenaarden+gh.pages@gmail.com',
      },
      skills: [
        {
          icon: '💻',
          title: 'Frontend Ontwikkeling',
          description: 'Bouwen van responsieve en interactieve gebruikersinterfaces met moderne frameworks zoals Angular, ASP.net en Blazor.',
        },
        {
          icon: '⚙️',
          title: 'Backend Ontwikkeling',
          description: 'Ontwikkelen van robuuste server-side applicaties met C#, Python en het maken van RESTful API\'s.',
        },
        {
          icon: '✨',
          title: 'AI Technologieën',
          description: 'Werken met geavanceerde AI-oplossingen via platforms zoals AWS Bedrock. Verantwoordelijke AI-ondersteunde ontwikkeling. Ervaring met het creëren van AI-systemen met meerdere stappen.',
        },
        {
          icon: '🚅',
          title: 'Snel Prototyping',
          description: 'Ontwikkelen van interactieve UI-prototypes met Angular en Ionic om ideeën vroeg te testen en feedback te verzamelen.',
        },
      ],
      projects: [
        {
          title: 'Silver Chains',
          description: 'Silver Chains is een Cyberchef geïnspireerde tekstverwerkingsapplicatie. Het laat je eenvoudige bewerkingen koppelen tot complexe oplossingen.',
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
        'Ik ben een enthousiaste full-stack ontwikkelaar met een passie voor het creëren van innovatieve digitale oplossingen. Mijn reis in de technologie begon met nieuwsgierigheid naar hoe software werkt, en is uitgegroeid tot een carrière waarin ik elke dag nieuwe uitdagingen aanga.',
        'Mijn expertise ligt in het bouwen van schaalbare webapplicaties met moderne technologieën. Ik geloof in schone code, intuïtieve gebruikerservaringen en continue verbetering. Ik blijf graag op de hoogte van de nieuwste ontwikkelingen in de branche.',
        'Wat ik het leukste vind aan programmeren is het oplossen van complexe problemen en het zien van hoe mijn werk waarde toevoegt aan eindgebruikers. Buiten mijn werk houd ik mezelf graag bezig met nieuwe technologieën en bijdrage ik aan open-source projecten.',
      ]
    }
  };

  setCurrentLanguage(lang: 'en' | 'nl') {
    this.currentLanguage.set(lang);
  }

  getCurrentLanguage() {
    return this.currentLanguage();
  }

  getDeveloper = computed(() => this.translations[this.currentLanguage()].developer);
  getSkills = computed(() => this.translations[this.currentLanguage()].skills);
  getProjects = computed(() => this.translations[this.currentLanguage()].projects);
  getAboutContent = computed(() => this.translations[this.currentLanguage()].aboutContent);
}
