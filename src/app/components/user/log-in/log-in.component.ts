import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
})
export class LogInComponent implements OnInit {
  isOpen: boolean = false;

  constructor() {}

  toggleNav() {
    this.isOpen = !this.isOpen;
    console.log(this.isOpen);
  }
  ngOnInit(): void {}
}
