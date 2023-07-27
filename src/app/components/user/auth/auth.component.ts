import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit, OnDestroy {
  constructor(public nav: NavigationService) {}

  ngOnInit(): void {
    this.nav.register('auth');
  }

  ngOnDestroy(): void {
    this.nav.unregister('auth');
  }
}
