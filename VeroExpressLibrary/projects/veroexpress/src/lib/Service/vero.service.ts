import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ContextMenuComponent } from '../../public-api';

@Injectable({
  providedIn: 'root'
})
export class VeroService {
  displyit:boolean = false;
  constructor(private dialog: MatDialog) { }

  Infor(){

    alert("Vero is working");

  }

  Success(text:string){

    alert("Vero is working");

  }

  Error(text:string){

    alert("Vero is working");

  }

  Info(text:string){

    alert("Vero is working");

  }


OpenContextMenu(top:string,left:string,data:any){

  const dialogRef = this.dialog.open(ContextMenuComponent, {
        
    panelClass: ['no-padding', 'no-scrolls'],   
    data:{top:top,left:left, data:data}   
    // data: x+'&'+y+'&'+dataIs
    
  });

  

}

  onContextMenu(event: MouseEvent, type: string, textIs:string) {



    //var elements_P = document.getElementsByTagName('app-viro-soft-menu-trigger')
    //while (elements_P[0]) elements_P[0].parentNode.removeChild(elements_P[0])

    

    // this.xPosition += (this.thisCurrentElem.nativeElement.offsetLeft -  this.thisCurrentElem.nativeElement.clientLeft)+ 'px';
    // this.yPosition += (this.thisCurrentElem.nativeElement.offsetTop - this.thisCurrentElem.nativeElement.clientTop)+ 'px';




    this.displyit = true;

    //console.log( this.thisCurrentElem.nativeElement);

    //alert('Allo is me Sofiane');

//let allo = this.contextmenus_.getNativeElement().nativeElement.offsetTop;
//let alloY = this.contextmenus_.getNativeElement().nativeElement.offsetLeft;

    //console.log(this.contextmenus_.getNativeElement().nativeElement.offsetTop);

    //console.log(event.clientX);


    //this.clientX_ = ( event.clientX  ) + 'px';
    //this.clientY_= (event.clientY) + 'px' ;




    //alert("YCM");
     //event.preventDefault();

     
   //  this.contextMenuPosition.x = event.clientX + 'px';
    // this.contextMenuPosition.y = event.clientY + 'px';

    //this.contextMenu.menuData = { 'item': item };
    // this.contextmenus_.open( ( allo- event.clientX  ) + 'px',  (event.clientY) + 'px')

    // this.contextmenus_.open( (  this.xPosition  ) + 'px',  (this.yPosition) + 'px');


    //this.contextmenus_.open(  (this.thisCurrentElem.nativeElement.offsetTop) + 'px',  (   event.clientX    )  + 'px', textIs);


  }





}
