import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoComponent } from './demo/demo.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: DemoComponent }
    ]),
  ],
  declarations: [
    DemoComponent
  ],
})
export class LazyModule { }
