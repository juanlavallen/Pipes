import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuComponent } from './menu/menu.component';
import { PrimengModule } from '../primeng/primeng.module';



@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    PrimengModule
  ],
  exports: [
    MenuComponent
  ]
})
export class SharedModule { }
