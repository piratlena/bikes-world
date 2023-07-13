import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', '../../../styles.scss'],
})
export class HeaderComponent {
  listener;
  isScrolled: boolean = false;

  constructor(private renderer2: Renderer2) {
    this.listener = this.renderer2.listen('window', 'scroll', (e) => {
      if (window.scrollY > 0) {
        this.isScrolled = true;
      } else if (window.scrollY === 0) {
        this.isScrolled = false;
      }
    });
  }
}
