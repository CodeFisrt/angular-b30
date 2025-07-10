import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class Highlight {

  constructor(private eleRef: ElementRef) {
    console.log("appHighlight executedd");
   }

   @HostListener('mouseover')
   onMouseOver() {
    console.log("onMouseOver")
    this.eleRef.nativeElement.style.color = 'red';
   }

   @HostListener('click')
   onElemenClick() {
     alert('u clickd element')
   }

   @HostListener('mouseleave')
   onMOuseLeft(){
     console.log("mouse left")
     this.eleRef.nativeElement.style.color = 'black';
   }
}
