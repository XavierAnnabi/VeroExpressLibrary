import { Directive, Input, HostListener, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[veroResizeMe]'
})
export class ResizeMeDirective {

  MyElement:any;
  MyRenderer:any;
  ResizeMe:boolean=false;  
   shiftX:any;
   shiftY:any;
   MyBoxIs : HTMLElement;
   @Input() isBox:any;

   ngOnInit(): void {
    this.MyBoxIs = document.getElementById(this.isBox) as HTMLElement;
  }



  constructor(el: ElementRef, renderer: Renderer2) { 

    this.MyElement =  el;
    this.MyRenderer =  renderer;
  
  }

  

  
  @HostListener('mousedown', ['$event'])
  onMouseDown(eventg: MouseEvent) {

    this.ResizeMe = true;
  //    this.shiftX = eventg.clientX - this.MyElement.nativeElement.getBoundingClientRect().left;
  //    this.shiftY = eventg.clientY - this.MyElement.nativeElement.getBoundingClientRect().top;
  //    this.moveAt(eventg.pageX, eventg.pageY);
  //  this.MyRenderer.addClass(this.MyElement.nativeElement, 'IsMoving');  
 }

 moveAt(pageX, pageY) {

  this.MyElement.nativeElement.style.left = pageX - this.shiftX + 'px';
  this.MyElement.nativeElement.style.top = pageY - this.shiftY + 'px';

}





  @HostListener('document:mousemove', ['$event']) 
  onMouseMoveDoc(event:MouseEvent) {
    if(this.ResizeMe){


   //    this.moveAt(event.pageX, event.pageY);      
   //    let elemBelow = document.elementFromPoint(event.clientX, event.clientY);      
   //    if (!elemBelow) return;
   //   console.log('onMouseMoveDoc');
   //  console.log(event);
    
    //this.MyBoxIs.style.width = (event.clientX - this.MyBoxIs.offsetLeft) + 'px';
    this.MyBoxIs.style.height = (event.clientY - this.MyBoxIs.offsetTop) + 'px';


    
    }  
  }


  @HostListener('document:mouseup', ['$event']) 
  onMouseUpDoc(event:MouseEvent) {
    this.ResizeMe = false;
  }


  
@HostListener('mouseup', ['$event'])
onMouseup(event: Event) {


 this.ResizeMe = false;
 document.removeEventListener('mousemove', this.onMouseMoveDoc,false);
 document.removeEventListener('mouseup', this.onMouseUpDoc,false);

 
 //console.log('onmouseup ');
 //this.MyRenderer.setStyle(this.MyElement.nativeElement, 'background-color', 'yellow');
 //console.log(event);
}
  

}
