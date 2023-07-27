import { Injectable } from '@angular/core';

interface INavigation {
  id: string;
  open: boolean;
}
@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  private navigation: INavigation[] = [];

  register(id: string) {
    this.navigation.push({
      id,
      open: false,
    });
  }
  unregister(id: string) {
    this.navigation = this.navigation.filter((el) => el.id !== id);
  }

  isOpen(id: string): boolean {
    return !!this.navigation.find((el) => el.id === id)?.open;
  }

  toggleOpen(id: string) {
    const nav = this.navigation.find((el) => el.id === id);

    if (nav) {
      nav.open = !nav.open;
    }
  }

  constructor() {}
}
