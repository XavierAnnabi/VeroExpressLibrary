import { NgModule } from '@angular/core';
import { VeroexpressComponent } from './veroexpress.component';
import { GridViewComponent } from './Ui/grid-view/grid-view.component';

@NgModule({
  declarations: [VeroexpressComponent, GridViewComponent],
  imports: [
  ],
  exports: [VeroexpressComponent]
})
export class VeroexpressModule { }
