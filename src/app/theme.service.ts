import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private variables: Map<string, string> = new Map();

  constructor() { }

  setVariable(name: string, value: string) {
    this.variables.set(name, value);
  }

  apply() {
    const root = document.documentElement;
    this.variables.forEach((value, name) => {
      root.style.setProperty(name, value);
    });
  }
}