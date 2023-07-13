import { Component } from '@angular/core';
import { Logos } from 'src/app/data/company-logo';

@Component({
  selector: 'app-company-logo',
  templateUrl: './company-logo.component.html',
  styleUrls: ['./company-logo.component.scss'],
})
export class CompanyLogoComponent {
  logos = Logos;
}
