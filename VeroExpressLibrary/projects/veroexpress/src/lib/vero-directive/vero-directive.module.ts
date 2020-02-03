import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragMeDirective } from './drag-me.directive';
import { ResizeMeDirective } from './resize-me.directive';

@NgModule({
  declarations: [DragMeDirective, ResizeMeDirective],
  imports: [
    CommonModule,
  
  ],
  exports : [
    DragMeDirective,
    ResizeMeDirective

  ]
})
export class VeroDirectiveModule { }
