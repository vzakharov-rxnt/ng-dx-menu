import { DxDemoComponent } from './dx-demo.component';
import { NgModule } from '@angular/core';
import { DxContextMenuModule } from 'devextreme-angular';

@NgModule({
  declarations: [
    DxDemoComponent
  ],
  imports: [
    DxContextMenuModule
  ]
})
export class DxDemoModule { }
