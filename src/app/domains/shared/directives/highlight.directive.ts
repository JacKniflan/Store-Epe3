import { Directive, ElementRef, inject } from '@angular/core';

@Directive({//Sirve para hacer manipulaciones directas en el DOM
  selector: '[Highlight]',
  standalone: true
})
export class HighlightDirective {

  element = inject(ElementRef);
  constructor() { }


  ngOnInit() {
    this.element.nativeElement.style.backgroundColor = 'red';
  }
}
