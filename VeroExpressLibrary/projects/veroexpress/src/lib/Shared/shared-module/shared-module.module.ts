import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VeroMaterilDesignModule } from '../../vero-materil-design/vero-materil-design.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
 
    VeroMaterilDesignModule
  ],
  exports:[
 
    VeroMaterilDesignModule
  ]
})
export class SharedModuleModule { }
