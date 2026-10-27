import { Component } from '@angular/core';

interface SkillGroup {
  label: string;
  skills: string[];
}

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
})
export class AboutComponent {

  readonly skillGroups: SkillGroup[] = [
    {
      label: 'Languages',
      skills: ['Python', 'TypeScript', 'JavaScript', 'C#', 'SQL', 'Swift'],
    },
    {
      label: 'Frameworks',
      skills: ['Angular', 'Next.js', 'ASP.NET Core', 'FastAPI', 'Entity Framework', 'Node.js'],
    },
    {
      label: 'Cloud & DevOps',
      skills: ['Azure (AKS, Key Vault, App Services)', 'Kubernetes', 'Istio', 'Helm', 'GitHub Actions', 'Spinnaker', 'AWS EC2'],
    },
    {
      label: 'Data & Observability',
      skills: ['SQL Server', 'PostgreSQL', 'SQLite', 'ELK Stack', 'Grafana', 'Power BI'],
    },
  ];

  readonly interests = [
    { name: 'Badminton', description: 'Strategy, footwork and quick reflexes. My favourite way to stay active.' },
    { name: 'Philosophy', description: "Reading about life's big questions, which keeps my thinking sharp." },
    { name: 'Woodworking', description: 'Building things by hand, a good balance to time spent on screens.' },
  ];

}
