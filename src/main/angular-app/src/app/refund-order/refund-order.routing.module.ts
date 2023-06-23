 
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { RefundOrderComponent } from './refund-order/refund-order.component';

const routes: Routes = [
  { path: '', component: RefundOrderComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RefundOrderRoutingModule {}
