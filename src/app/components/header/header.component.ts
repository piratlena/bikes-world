import { Component, Renderer2, OnInit, Input } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', '../../../styles.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() navId = '';
  listener;
  isScrolled: boolean = false;

  constructor(private renderer2: Renderer2, public nav: NavigationService) {
    this.listener = this.renderer2.listen('window', 'scroll', (e) => {
      if (window.scrollY > 0) {
        this.isScrolled = true;
      } else if (window.scrollY === 0) {
        this.isScrolled = false;
      }
    });
  }
  openNav() {
    this.nav.toggleOpen('auth');
  }

  ngOnInit(): void {}
}
