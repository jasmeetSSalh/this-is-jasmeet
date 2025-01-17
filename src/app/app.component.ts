import { Component , ViewEncapsulation} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { ResumeComponent } from "./components/resume/resume.component";
import { AboutComponent } from "./components/about/about.component";
import { ProjectsComponent } from "./components/projects/projects.component";
import { ContactComponent } from "./components/contact/contact.component";
import { trigger, transition, style, animate } from '@angular/animations';


@Component({
  selector: 'app-root',
  imports: [ HomeComponent, ResumeComponent, AboutComponent, ProjectsComponent, ContactComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  encapsulation: ViewEncapsulation.None,
  animations: [
      trigger('fadeIn', [
        transition(':enter', [
          style({ opacity: 0 }),
          animate('500ms ease-in', style({ opacity: 1 })),
        ]),
      ]),
    ],
})
export class AppComponent {
  title = 'this-is-jasmeet-v3';
}
