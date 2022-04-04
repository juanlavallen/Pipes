import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimengModule } from '../primeng/primeng.module';

import { NumbersComponent } from './pages/numbers/numbers.component';
import { NotcommonsComponent } from './pages/notcommons/notcommons.component';
import { OrderComponent } from './pages/order/order.component';
import { CommonComponent } from './pages/common/common.component';



@NgModule({
  declarations: [
    NumbersComponent,
    NotcommonsComponent,
    OrderComponent,
    CommonComponent
  ],
  imports: [
    CommonModule,
    PrimengModule
  ], exports: [
    NumbersComponent,
    NotcommonsComponent,
    OrderComponent,
    CommonComponent
  ]
})
export class SalesModule { }
