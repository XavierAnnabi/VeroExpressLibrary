import { NgModule } from '@angular/core';
import { VeroexpressComponent } from './veroexpress.component';
import { GridViewComponent } from './Ui/grid-view/grid-view.component';
import { LookUpComponent } from './Ui/look-up/look-up.component';
import { ContextMenuComponent } from './Ui/context-menu/context-menu.component';
import { ToastComponent } from './Ui/toast/toast.component';
import { SharedModuleModule } from './Shared/shared-module/shared-module.module';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { PanelComponent } from './Ui/panel/panel.component';
import { VeroDirectiveModule } from './vero-directive/vero-directive.module';



@NgModule({
  declarations: [
    
    VeroexpressComponent,
     GridViewComponent, 
     LookUpComponent, 
     ContextMenuComponent, 
     ToastComponent,
      PanelComponent
    ],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModuleModule,
    VeroDirectiveModule
  ],
  exports: [
    
    VeroexpressComponent,
    PanelComponent,
    GridViewComponent, 
    LookUpComponent, 
    ContextMenuComponent, 
    ToastComponent,
  
    SharedModuleModule,
    VeroDirectiveModule
  ]
})
export class VeroexpressModule { }
