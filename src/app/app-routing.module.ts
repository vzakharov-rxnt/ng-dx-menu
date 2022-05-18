import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DxDemoComponent } from './dx-demo/dx-demo.component';
import { DxDemoModule } from './dx-demo/dx-demo.module';

const routes: Routes = [
  { path: '', component: DxDemoComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),

    DxDemoModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
