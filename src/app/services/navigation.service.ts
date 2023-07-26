import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  private open = false;

  isOpen() {
    return this.open;
  }

  toggleOpen() {
    this.open = !this.open;
  }

  constructor() {}
}
