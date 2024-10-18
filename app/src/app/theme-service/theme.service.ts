import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private currentThemeLink: HTMLLinkElement | null = null;

  constructor() {
  }

  public loadTheme(theme: string) {
    if (this.currentThemeLink) {
      this.currentThemeLink.remove(); // Remove previous theme
    }

    const head = document.head;
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = `https://unpkg.com/primeng/resources/themes/${theme}/theme.css`; // Load theme from CDN
    link.classList.add('theme-css');

    this.currentThemeLink = link;
    head.appendChild(link); // Add new theme
  }
}
