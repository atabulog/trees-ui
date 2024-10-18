import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HomePageComponent} from "./home-page/home-page.component";
import {ThemeService} from "./theme-service/theme.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomePageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title: string = 'app';
  protected darkMode: boolean = true;

  constructor(private themeService: ThemeService) {
    this.themeService.loadTheme('lara-dark-blue');
  }

  toggleDarkMode(): void {
    this.darkMode = !this.darkMode;
    if(this.darkMode) {
      this.themeService.loadTheme('lara-dark-blue');
    }
    else{
      this.themeService.loadTheme('lara-light-blue');
    }
  }
}
