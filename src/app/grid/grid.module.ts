import { NgModule } from '@angular/core';
import { DxDataGridModule } from 'devextreme-angular';
import { GridComponent } from './grid.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    GridComponent
  ],
  imports: [
    DxDataGridModule,
    CommonModule
  ],
  exports: [
    GridComponent,
  ],
})
export class GridModule { }
