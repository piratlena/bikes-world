import { Component, OnInit, Input } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  @Input() navId = '';
  constructor(public nav: NavigationService) {}

  closeNav() {
    this.nav.toggleOpen(this.navId);
  }
  ngOnInit(): void {}
}
