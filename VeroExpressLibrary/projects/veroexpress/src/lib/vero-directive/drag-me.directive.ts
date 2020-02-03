import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[veroDragMe]'
})
export class DragMeDirective {

  MyElement:any;
  MyRenderer:any;
  AmMoving:boolean=false;
  
   shiftX:any;
   shiftY:any;


   constructor(el: ElementRef, renderer: Renderer2) { 

    this.MyElement =  el;
    this.MyRenderer =  renderer;
    //renderer.setStyle(el.nativeElement, 'background-color', 'red');

  }


  @HostListener('document:mousemove', ['$event']) 
  onMouseMoveDoc(event:MouseEvent) {
    if(this.AmMoving){
      this.moveAt(event.pageX, event.pageY);      
      let elemBelow = document.elementFromPoint(event.clientX, event.clientY);      
      if (!elemBelow) return;
     console.log('onMouseMoveDoc');
    console.log(event);  
    }  
  }


  @HostListener('document:mouseup', ['$event']) 
  onMouseUpDoc(event:MouseEvent) {
    this.AmMoving = false;
  }


  moveAt(pageX, pageY) {

    this.MyElement.nativeElement.parentNode.style.left = pageX - this.shiftX + 'px';
    this.MyElement.nativeElement.parentNode.style.top = pageY - this.shiftY + 'px';

  }



  @HostListener('mousedown', ['$event'])
  onMouseDown(eventg: MouseEvent) {

    this.AmMoving = true;
     this.shiftX = eventg.clientX - this.MyElement.nativeElement.parentNode.getBoundingClientRect().left;
     this.shiftY = eventg.clientY - this.MyElement.nativeElement.parentNode.getBoundingClientRect().top;

     this.moveAt(eventg.pageX, eventg.pageY);



   console.log('mousedown');

   this.MyRenderer.addClass(this.MyElement.nativeElement.parentNode, 'IsMoving');


  //  this.MyRenderer.setStyle(this.MyElement.nativeElement, 'background-color', 'green');
  //  this.MyRenderer.class(this.MyElement.nativeElement, 'background-color', 'green');


  


   
   console.log(event);
  
 }




 
 @HostListener('mouseup', ['$event'])
 onMouseup(event: Event) {


  this.AmMoving = false;
  document.removeEventListener('mousemove', this.onMouseMoveDoc,false);
  document.removeEventListener('mouseup', this.onMouseUpDoc,false);

  
  //console.log('onmouseup ');
  //this.MyRenderer.setStyle(this.MyElement.nativeElement, 'background-color', 'yellow');
  //console.log(event);
}





}
