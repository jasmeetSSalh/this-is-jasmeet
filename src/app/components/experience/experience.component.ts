import { Component } from '@angular/core';

interface Role {
  title: string;
  company: string;
  dates: string;
  summary: string;
  tech: string[];
}

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.component.html',
})
export class ExperienceComponent {

  readonly roles: Role[] = [
    {
      title: 'Process Engineer Co-op, SaaS Ops',
      company: 'PointClickCare',
      dates: 'May 2026 – Aug 2026',
      summary: 'Built and deployed a highly available Python service that connects all 12 on-call engineering teams with 3 vendor systems. Added metrics, logs and traces with ELK and Grafana, and CI/CD with canary releases and automatic rollback that cut release time from hours to minutes.',
      tech: ['Python', 'Kubernetes (AKS)', 'Istio', 'Helm', 'Spinnaker', 'GitHub Actions'],
    },
    {
      title: 'AI Engineering Developer Co-op',
      company: 'Ontario Ministry of Public and Business Service Delivery and Procurement',
      dates: 'Jan 2026 – Apr 2026',
      summary: 'Built a RAG pipeline on Azure AI Foundry that drafts system architecture diagrams, and Power BI reports on architecture bottlenecks for the Infrastructure Technology Services division.',
      tech: ['Python', 'Azure AI Foundry', 'Power BI'],
    },
    {
      title: 'Software Engineer Intern',
      company: 'Ontario Power Generation',
      dates: 'Jan 2025 – Sep 2025',
      summary: 'Led end-to-end development of a web app adopted by 6 departments (90 trainers), replacing paper workflows in a nuclear environment. Its AI report generator turns 10–50 hours of manual work into seconds.',
      tech: ['Angular', '.NET C#', 'SQL Server', 'Azure', 'Azure DevOps'],
    },
    {
      title: 'Data Analyst Intern',
      company: 'Ontario Power Generation',
      dates: 'Sep 2024 – Dec 2024',
      summary: 'Built Power BI dashboards for executive reporting and automated Excel reporting with VBA, saving about 120 hours a month.',
      tech: ['SQL', 'Power BI', 'VBA'],
    },
  ];

}
