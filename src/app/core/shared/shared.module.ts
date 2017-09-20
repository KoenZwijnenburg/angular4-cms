import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from '../grid/grid.component';
import { GridService } from '../grid/grid.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    GridComponent,
  ],
  exports: [
    GridComponent
  ],
  providers: [
    GridService
  ]
})

export class SharedModule {

}
