import { Component } from '@angular/core';

interface Project {
  name: string;
  tag?: string;
  description: string;
  tech: string[];
  repo: string;
  extraLink?: { label: string; url: string };
}

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
})
export class ProjectsComponent {

  readonly featured: Project[] = [
    {
      name: 'CapyDoro',
      tag: 'macOS app',
      description: 'A Pomodoro timer in the Mac menu bar, with an animated capybara that walks while you focus and naps on breaks. '
        + 'Released as a download, covered by unit tests, and built on Apple frameworks only.',
      tech: ['Swift', 'SwiftUI', 'XCTest'],
      repo: 'https://github.com/jasmeetSSalh/CapyDoro',
      extraLink: { label: 'Download', url: 'https://github.com/jasmeetSSalh/CapyDoro/releases/latest' },
    },
    {
      name: 'Streamly',
      tag: 'Team project',
      description: 'A movie and show subscription platform with roles, a searchable catalog, watchlists and admin tools. '
        + 'Paid plans run through Stripe Checkout and are only activated by verified Stripe webhooks.',
      tech: ['Next.js', 'TypeScript', 'Drizzle ORM', 'Stripe'],
      repo: 'https://github.com/jasmeetSSalh/Streaming-Platform',
    },
    {
      name: 'PilotAssess',
      tag: 'Full-stack',
      description: 'A tool for flight instructors to build simulator assessments, grade each pilot on observed behaviours and export Word report cards. '
        + 'Instructors sign in with hashed-password accounts, and every API endpoint requires a session.',
      tech: ['Angular', 'ASP.NET Core', 'EF Core', 'SQLite'],
      repo: 'https://github.com/jasmeetSSalh/humanPerformanceTool',
    },
    {
      name: 'Movie Recommendation System',
      tag: 'Machine learning',
      description: 'A content-based recommendation model trained on a large movie dataset, served through a Flask app deployed on AWS EC2.',
      tech: ['Python', 'Flask', 'Jupyter', 'AWS EC2'],
      repo: 'https://github.com/jasmeetSSalh/Movie-Recommendation-System',
    },
  ];

  readonly others: Project[] = [
    {
      name: 'Feather Weather',
      description: 'A weather app that pulls live conditions from the OpenWeatherMap API.',
      tech: ['Node.js', 'Express', 'EJS'],
      repo: 'https://github.com/jasmeetSSalh/feather-weather',
    },
    {
      name: 'AI Impact Analysis',
      description: "Analysis and charts of 100+ survey responses on AI's impact in academia.",
      tech: ['Python', 'Matplotlib'],
      repo: 'https://github.com/jasmeetSSalh/CPS412-ChatGPT-Analysis-Program',
    },
    {
      name: 'Amazon Web Scraper',
      description: 'A price tracker that scrapes product pages and stores the history as CSV.',
      tech: ['Python', 'BeautifulSoup', 'Pandas'],
      repo: 'https://github.com/jasmeetSSalh/Amazon-Web-Scraper',
    },
  ];

}
