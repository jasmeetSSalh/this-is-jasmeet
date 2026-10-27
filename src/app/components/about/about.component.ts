import { Component } from '@angular/core';

interface SkillGroup {
  label: string;
  skills: string[];
}

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
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

}
