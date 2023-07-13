import { Directive, AfterViewInit, ElementRef, Input } from '@angular/core';
import { SwiperOptions } from 'swiper/types/swiper-options';

@Directive({
  selector: '[swiperDirective]',
})
export class SwiperDirectiveDirective implements AfterViewInit {
  private readonly swiperElement: HTMLElement;

  @Input('config')
  congig?: SwiperOptions;

  constructor(private el: ElementRef<HTMLElement>) {
    this.swiperElement = el.nativeElement;
  }
  ngAfterViewInit() {
    Object.assign(this.el.nativeElement, this.congig);
  }
}
