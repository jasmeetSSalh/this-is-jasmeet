import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

// The resume lives in Google Drive, so updating that file updates the site.
const RESUME_DRIVE_ID = '1g8DrFVXMBzxGJTH7U33dicjKrp66fuUO';

export const RESUME_VIEW_URL = `https://drive.google.com/file/d/${RESUME_DRIVE_ID}/view?usp=sharing`;
export const RESUME_DOWNLOAD_URL = `https://drive.google.com/uc?export=download&id=${RESUME_DRIVE_ID}`;
const RESUME_PREVIEW_URL = `https://drive.google.com/file/d/${RESUME_DRIVE_ID}/preview`;

@Component({
  selector: 'app-resume',
  imports: [],
  templateUrl: './resume.component.html',
})
export class ResumeComponent {
  readonly viewUrl = RESUME_VIEW_URL;
  readonly downloadUrl = RESUME_DOWNLOAD_URL;
  readonly previewUrl: SafeResourceUrl;

  constructor(sanitizer: DomSanitizer) {
    // A fixed Google Drive URL, so it is safe to embed.
    this.previewUrl = sanitizer.bypassSecurityTrustResourceUrl(RESUME_PREVIEW_URL);
  }
}
