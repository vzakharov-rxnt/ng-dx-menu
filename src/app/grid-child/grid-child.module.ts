import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridChildComponent } from './grid-child.component';

@NgModule({
  declarations: [
    GridChildComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GridChildComponent,
  ],
})
export class GridChildModule { }
