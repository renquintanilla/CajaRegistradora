
import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(private elem: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.elem.nativeElement, 'text-dercoration', 'underline');
    this.renderer.setStyle(this.elem.nativeElement, 'color', 'indigo')
  }

@HostListener('mouseover') onMouseOver() {
  this.renderer.setStyle(this.elem.nativeElement, 'color', 'green')
}

@HostListener('mouseout') onMouseOut() {
  this.renderer.setStyle(this.elem.nativeElement, 'color', 'indigo')
}
}
