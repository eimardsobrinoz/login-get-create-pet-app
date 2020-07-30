import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[noImgAvailable]'
})
export class NoImgDirective {
public img: any;
public noImgPath: string = 'assets/img/noImage.jpg';

  constructor(private element: ElementRef) {
    this.img = element.nativeElement;
  }

  @HostListener('error') onLoad() {
    this.img.src = this.noImgPath;
  }

}
