import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommonComponent } from './sales/pages/common/common.component';
import { NotcommonsComponent } from './sales/pages/notcommons/notcommons.component';
import { NumbersComponent } from './sales/pages/numbers/numbers.component';
import { OrderComponent } from './sales/pages/order/order.component';

const routes: Routes = [
  { path: '',             component: CommonComponent, pathMatch: 'full' },
  { path: 'numbers',      component: NumbersComponent },
  { path: 'noCommons',    component: NotcommonsComponent },
  { path: 'order',        component: OrderComponent },
  { path: '**',           redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
