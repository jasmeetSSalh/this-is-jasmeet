import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  lang = {
    "angular": "85%",
    "typescript": "70%",
    ".net": "70%",
    "java": "80%",
    "python": "80%",
    "c#": "60%",
    "devops": "60%",
    "mysql": "80%",
    "oracle": "60%",
    "powerbi": "90%"
  };

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    this.updateLanguageSkills();
  }

  updateLanguageSkills(): void {
    let multiply = 4;
    const delay = 700;

    // Iterate through each language and update the corresponding element
    Object.entries(this.lang).forEach(([language, percent]) => {
      setTimeout(() => {
        // Select the element by its ID and set its inner HTML to the percentage value
        const element = document.getElementById(`${language}-pourcent`);
        if (element) {
          this.renderer.setProperty(element, 'innerHTML', percent);
        }
      }, delay * multiply);

      multiply++;
    });
  }

}
