import { NgModule } from '@angular/core';
import { DxDataGridModule } from 'devextreme-angular';
import { GridComponent } from './grid.component';
import { CommonModule } from '@angular/common';
import { GridChildModule } from '../grid-child/grid-child.module';

@NgModule({
  declarations: [
    GridComponent
  ],
  imports: [
    DxDataGridModule,
    CommonModule,
    GridChildModule
  ],
  exports: [
    GridComponent,
  ],
})
export class GridModule { }
