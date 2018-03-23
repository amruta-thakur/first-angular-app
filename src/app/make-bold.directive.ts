import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appMakeBold]'
})
export class MakeBoldDirective {
  @Input() bgColor:string;

  constructor(private elementRef: ElementRef) { }

  @HostListener("mouseover")onMouseOver(){
  		this.elementRef.nativeElement.style.fontWeight = "bold";
  		this.elementRef.nativeElement.style.backgroundColor = this.bgColor;
  }

  @HostListener("mouseleave")onMouseLeave(){
  		this.elementRef.nativeElement.style.fontWeight = "normal";
  		this.elementRef.nativeElement.style.backgroundColor = "initial";
  }
}
