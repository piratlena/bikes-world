import { Component, OnInit, Input } from '@angular/core';
import { Slides } from 'src/app/data/slides';
import { Slide } from 'src/app/types/Slide';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.scss'],
})
export class SlidesComponent implements OnInit {
  @Input() slides = Slides;

  ngOnInit(): void {}
}
