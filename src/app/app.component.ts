import { Component, ElementRef } from '@angular/core';
import { Product } from './model';
import { ThemeService } from './theme.service';
// import { ThemeService } from '@progress/kendo-theme-material';

@Component({
  selector: 'my-app',
  template: `
        <my-grid></my-grid>
        ss
        привет всем!
        <button (click)='setColor()'> set color</button>
        <button (click)='changeToLight()'>to light</button>
        <button (click)='changeToDark()'>to dark</button>
    `,
})
export class AppComponent {
  constructor(private el: ElementRef, private themeService: ThemeService) {}
  setBlueTheme() {
    this.themeService.setVariable('--color-bg-primary', 'blue');
    this.themeService.apply();
  }

  setGreenTheme() {
    this.themeService.setVariable('--color-bg-primary', 'green');
    this.themeService.apply();
  }

  setColor() {
    const newColor = 'light';
    document.documentElement.style.setProperty('--kendo-theme-type', newColor);
  }

  changeToLight() {
    document.documentElement.style.setProperty('--bg-color', 'white');
    document.documentElement.style.setProperty('--text-color', 'black');
  }

  changeToDark() {
    document.documentElement.style.setProperty('--bg-color', 'black');
    document.documentElement.style.setProperty('--text-color', 'white');
  }
}
