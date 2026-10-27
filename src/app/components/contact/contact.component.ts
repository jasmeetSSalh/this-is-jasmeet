import { Component } from '@angular/core';
import { RESUME_DOWNLOAD_URL } from '../resume/resume.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  readonly resumeDownloadUrl = RESUME_DOWNLOAD_URL;

  formData = {
    name: '',
    email: '',
    message: '',
  };

  sendEmail() {
    const { name, email, message } = this.formData;
    const subject = encodeURIComponent(`Message from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    const mailtoLink = `mailto:jasmeet.salh@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
  }
}
