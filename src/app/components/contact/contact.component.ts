import { Component } from '@angular/core';
import { RESUME_DOWNLOAD_URL } from '../resume/resume.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  readonly resumeDownloadUrl = RESUME_DOWNLOAD_URL;
  readonly year = new Date().getFullYear();
}
