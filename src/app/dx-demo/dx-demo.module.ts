import { DxDemoComponent } from './dx-demo.component';
import { NgModule } from '@angular/core';
import { DxContextMenuModule, DxDataGridModule } from 'devextreme-angular';
import { GridModule } from '../grid/grid.module';

@NgModule({
  declarations: [
    DxDemoComponent
  ],
  imports: [
    DxContextMenuModule,
    DxDataGridModule,
    GridModule,
  ]
})
export class DxDemoModule { }
