import { Component } from '@angular/core';

interface Link {
  label: string;
  url: string;
}

interface FeaturedProject {
  name: string;
  tag: string;
  description: string;
  tech: string[];
  repo: string;
  extraLink?: Link;
  image?: { src: string; alt: string };
  placeholder: string;
  // Full Tailwind class strings, so the Tailwind scanner keeps them.
  accent: {
    border: string;
    tag: string;
    button: string;
    panel: string;
    panelText: string;
  };
}

interface OtherProject {
  name: string;
  description: string;
  tech: string[];
  repo: string;
  image: string;
}

const ACCENTS = {
  amber: {
    border: 'hover:border-amber-500/50',
    tag: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
    button: 'bg-amber-600 hover:bg-amber-500',
    panel: 'from-amber-500/20 to-orange-500/20 border-amber-500/30',
    panelText: 'text-amber-300',
  },
  purple: {
    border: 'hover:border-purple-500/50',
    tag: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
    button: 'bg-purple-600 hover:bg-purple-500',
    panel: 'from-purple-500/20 to-fuchsia-500/20 border-purple-500/30',
    panelText: 'text-purple-300',
  },
  blue: {
    border: 'hover:border-blue-500/50',
    tag: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
    button: 'bg-blue-600 hover:bg-blue-500',
    panel: 'from-blue-500/20 to-cyan-500/20 border-blue-500/30',
    panelText: 'text-blue-300',
  },
  green: {
    border: 'hover:border-green-500/50',
    tag: 'bg-green-500/20 text-green-300 border-green-500/30',
    button: 'bg-green-600 hover:bg-green-500',
    panel: 'from-green-500/20 to-emerald-500/20 border-green-500/30',
    panelText: 'text-green-300',
  },
};

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  readonly featured: FeaturedProject[] = [
    {
      name: 'CapyDoro',
      tag: 'macOS app',
      description: 'A Pomodoro timer that lives in the Mac menu bar, with an animated capybara that walks while you focus and naps on breaks. '
        + 'Released as a download, covered by unit tests, and built on Apple frameworks only, with no third-party dependencies.',
      tech: ['Swift', 'SwiftUI', 'XCTest', 'Python'],
      repo: 'https://github.com/jasmeetSSalh/CapyDoro',
      extraLink: { label: 'Download', url: 'https://github.com/jasmeetSSalh/CapyDoro/releases/latest' },
      image: {
        src: 'https://raw.githubusercontent.com/jasmeetSSalh/CapyDoro/main/Art/sprites/preview/transitions.gif',
        alt: 'The CapyDoro capybara walking, napping and floating in a hot spring in the menu bar',
      },
      placeholder: 'Menu bar timer',
      accent: ACCENTS.amber,
    },
    {
      name: 'Streamly',
      tag: 'Team project',
      description: 'A movie and show subscription platform with roles, a searchable title catalog, watchlists and admin tools. '
        + 'Paid plans run through Stripe Checkout, and subscriptions are only activated by verified Stripe webhooks.',
      tech: ['Next.js', 'TypeScript', 'Drizzle ORM', 'Stripe', 'Tailwind'],
      repo: 'https://github.com/jasmeetSSalh/Streaming-Platform',
      placeholder: 'Subscription platform',
      accent: ACCENTS.purple,
    },
    {
      name: 'PilotAssess',
      tag: 'Full-stack',
      description: 'A tool for flight instructors to build scenario-based simulator assessments, grade each pilot on observed behaviours, '
        + 'and export filled-in Word report cards. Instructors sign in with hashed-password accounts, and every API endpoint requires a session.',
      tech: ['Angular', 'ASP.NET Core', 'EF Core', 'SQLite'],
      repo: 'https://github.com/jasmeetSSalh/humanPerformanceTool',
      placeholder: 'Assessment platform',
      accent: ACCENTS.blue,
    },
    {
      name: 'Movie Recommendation System',
      tag: 'Machine learning',
      description: 'A content-based recommendation model trained on a large movie dataset, served through a Flask app deployed on AWS EC2.',
      tech: ['Python', 'Flask', 'Jupyter', 'AWS EC2'],
      repo: 'https://github.com/jasmeetSSalh/Movie-Recommendation-System',
      placeholder: 'Recommendation engine',
      accent: ACCENTS.green,
    },
  ];

  readonly others: OtherProject[] = [
    {
      name: 'Feather Weather',
      description: 'A weather app that pulls live conditions from the OpenWeatherMap API.',
      tech: ['Node.js', 'Express', 'EJS'],
      repo: 'https://github.com/jasmeetSSalh/feather-weather',
      image: 'assets/images/Projects/featherWeather.png',
    },
    {
      name: 'AI Impact Analysis',
      description: "Analysis and charts of 100+ survey responses on AI's impact in academia.",
      tech: ['Python', 'Matplotlib'],
      repo: 'https://github.com/jasmeetSSalh/CPS412-ChatGPT-Analysis-Program',
      image: 'assets/images/Projects/dataAnalytics.jpeg',
    },
    {
      name: 'Amazon Web Scraper',
      description: 'A price tracker that scrapes product pages and stores the history as CSV.',
      tech: ['Python', 'BeautifulSoup', 'Pandas'],
      repo: 'https://github.com/jasmeetSSalh/Amazon-Web-Scraper',
      image: 'assets/images/Projects/amazonWebscrapper.avif',
    },
  ];

}
