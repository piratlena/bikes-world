import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[cardFooter]',
})
export class CardDirectiveDirective {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  // HostListener - ссылается  на DOM элемент, который содержит директиву. В данном случае это <div>
  // Устанавливаем обработчик на событие mouseenter
  @HostListener('mouseenter') onMouseEnter() {
    this.changeDisplay('block');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.changeDisplay('none');
  }

  private changeDisplay(display: string) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'display', display);
  }
}
