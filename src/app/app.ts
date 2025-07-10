import {
  Component,
  signal,
  OnInit,
  computed,
  inject,
  DestroyRef,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { fromEvent } from 'rxjs';

interface Developer {
  name: string;
  title: string;
  description: string;
  githubUrl: string;
  linkedinUrl: string;
  email: string;
}

interface NavItem {
  label: string;
  link: string;
  external?: boolean;
}

interface Technology {
  emoji: string;
  name: string;
}

interface Skill {
  icon: string;
  title: string;
  description: string;
}

interface Project {
  title: string;
  description: string;
  technologies: string[];
  demoUrl: string;
  sourceUrl: string;
}

interface SocialLink {
  emoji: string;
  url: string;
  label: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  private readonly destroyRef = inject(DestroyRef);

  // Signals for reactive state
  protected readonly title = signal('Github-Site');
  protected readonly isScrolled = signal(false);

  // Developer information
  protected readonly developer = signal<Developer>({
    name: 'Stefan van Oudenaarden',
    title: 'Full Stack Developer',
    description:
      'Passionate developer creating innovative solutions with modern technologies. I love building scalable applications and exploring new frameworks to solve complex problems.',
    githubUrl: 'https://github.com/Stefan-v-Oudenaarden',
    linkedinUrl: 'https://www.linkedin.com/in/stefan-van-oudenaarden/',
    email: 's.oudenaarden+gh.pages@gmail.com',
  });

  // Navigation items computed from developer info
  protected readonly navItems = computed<NavItem[]>(() => [
    { label: 'Home', link: '#home' },
    { label: 'About', link: '#about' },
    { label: 'Skills', link: '#skills' },
    { label: 'Projects', link: '#projects' },
  ]);

  // Technology showcase
  protected readonly technologies = signal<Technology[]>([
    { emoji: '⚛️', name: 'React' },
    { emoji: '🅰️', name: 'Angular' },
    { emoji: '📗', name: 'Node.js' },
    { emoji: '🟨', name: 'JavaScript' },
    { emoji: '🔵', name: 'TypeScript' },
    { emoji: '🐍', name: 'Python' },
    { emoji: '🌐', name: 'Web APIs' },
    { emoji: '🎨', name: 'Tailwind' },
  ]);

  // Skills data
  protected readonly skills = signal<Skill[]>([
    {
      icon: '💻',
      title: 'Frontend Development',
      description:
        'Building responsive and interactive user interfaces with modern frameworks like Angular, ASP.net and Blazor.',
    },
    {
      icon: '⚙️',
      title: 'Backend Development',
      description:
        'Developing robust server-side applications with C#, Python and creating RESTful APIs.',
    },
    {
      icon: '✨',
      title: 'AI Technologies',
      description:
        'Working with state of the art AI solutions through platforms like AWS Bedrock. Responsible AI assisted development. Experienced with creating mult-step AI systems.',
    },
    {
      icon: '🚅',
      title: 'Rapid Prototyping',
      description:
        ' Developing interactive UI prototypes with Angular and Ionic to test ideas and gather feedback early.',
    },
  ]);

  // Projects data
  protected readonly projects = signal<Project[]>([
    {
      title: 'Silver Chains',
      description:
        ' Silver Chains is a Cyberchef inspired text processing application. It lets you chain simple operations together into complex solutions. ',
      technologies: ['Angular', 'Ionic', 'Typescript', 'Node.js'],
      demoUrl: 'https://stefan-v-oudenaarden.github.io/Silver-Chains/',
      sourceUrl: 'https://github.com/Stefan-v-Oudenaarden/Silver-Chains',
    },
    {
      title: 'Bonsai',
      description: 'Bonsai is a series of random text generators. ',
      technologies: ['Blazor WASM', 'Tailwind', 'C#'],
      demoUrl: 'https://stefan-v-oudenaarden.github.io/Bonsai/',
      sourceUrl: 'https://github.com/Stefan-v-Oudenaarden/Bonsai',
    },
  ]);

  // Social links computed from developer info
  protected readonly socialLinks = computed<SocialLink[]>(() => [
    { emoji: '📧', url: `mailto:${this.developer().email}`, label: 'Email' },
    { emoji: '💼', url: this.developer().linkedinUrl, label: 'LinkedIn' },
    { emoji: '🐙', url: this.developer().githubUrl, label: 'GitHub' },
  ]);

  // About section content
  protected readonly aboutContent = signal<string[]>([
    'Minim magna excepteur pariatur ad. Id occaecat commodo mollit laborum non et ad quis ipsum quis dolore. Culpa sit proident magna quis aliquip laborum occaecat incididunt enim. Anim do velit et ipsum eiusmod. Aliquip laborum ad aliquip quis laboris duis non mollit cillum veniam laborum cillum esse.',
    'Consectetur laborum cillum id quis voluptate incididunt qui mollit adipisicing ut. Velit aliqua non ad ea veniam ex elit veniam magna laboris voluptate magna. Veniam laboris enim aute proident ex officia. Dolore est aute cillum ad. Amet elit fugiat pariatur ullamco Lorem elit officia laboris nostrud voluptate deserunt non cillum veniam.',
    'Do cillum tempor est quis aute sint eu ut aliquip culpa exercitation. Mollit cillum ullamco in occaecat qui amet laboris et deserunt ea ipsum. Amet laborum eu ea duis incididunt aute. Nisi esse anim Lorem cupidatat qui amet amet veniam id aute est. Dolore ad laboris ipsum dolore proident officia dolore nisi mollit. Aute sunt dolor commodo laborum voluptate consectetur. Nostrud esse ullamco adipisicing deserunt anim nostrud sint sint nulla et officia ea nisi.',
  ]);

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
}
