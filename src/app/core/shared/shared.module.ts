import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from '../../template/grid/grid.component';
import { GridService } from '../../template/grid/grid.service';

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
