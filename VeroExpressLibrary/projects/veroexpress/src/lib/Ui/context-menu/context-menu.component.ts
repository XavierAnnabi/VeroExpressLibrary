import { Component, OnInit, ElementRef, Inject, HostListener } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { KeyValueData } from '../../Model/KeyValueData';
import { InterData } from '../../Model/interData';

@Component({
  selector: 'Vero-context-menu',
  templateUrl: './context-menu.component.html',
  styleUrls: ['./context-menu.component.css']
})
export class ContextMenuComponent implements OnInit {

  firstyload:boolean=false;
  thisCurrentElem:ElementRef;
  dynamicContext:KeyValueData[]=[];
  text:string='Allo'

  displyit:boolean= false;
  clientX_:string ='0px';
  clientY_:string ='0px';


  constructor( 

    element: ElementRef, 
     public dialogRef: MatDialogRef<ContextMenuComponent>,
    @Inject(MAT_DIALOG_DATA) public data: InterData, 
   // private getContextM : ActionContextMenuService
    ) { 

      this.thisCurrentElem = element;
    }

    


    @HostListener('document:click', ['$event'])
    clickout(event) {
      if(this.thisCurrentElem.nativeElement.contains(event.target)) {
        this.text = "clicked inside";
      //  this.displyit = false;
      } else {
  
        
  
        if(this.firstyload){
  
             this.displyit = false;
  
             // var elements_P = document.getElementsByTagName('cdk-overlay-container')
        // while (elements_P[0]) elements_P[0].parentNode.removeChild(elements_P[0])
  
        this.dialogRef.close();
        
             //var elements_P = this.thisCurrentElem.nativeElement;
         // while (elements_P[0]) this.thisCurrentElem.nativeElement.parentNode(elements_P[0])
  
  
        
  
  
        
  
        }
    
        this.firstyload =  true;
   
  
        this.text = "clicked outside";
      }
    }



    
  ngOnInit() {
  
    let dataIs = this.data.toString().split('&');
//console.log(dataIs);
this.displyit = true;
this.clientX_ = dataIs[0];
this.clientY_ = dataIs[1];


     // this.dynamicContext =    this.getContextM.contextMenuAction(dataIs[2]);

      console.log( 'Amigo'+this.dynamicContext);


  }


  RuncontextMenu(actionName,data){


    switch(actionName){

      case 'View':
alert("is View function is"+ data);

this.dialogRef.close();

break;

case 'Report':
    alert("is Report function is"+ data);
    
    this.dialogRef.close();
    
    break;





    }


  }



}
