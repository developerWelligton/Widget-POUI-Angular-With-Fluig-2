import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RefundOrderRoutingModule } from './refund-order.routing.module'; 
import { RefundOrderComponent } from './refund-order/refund-order.component';
import { PoModule } from '@po-ui/ng-components';

 
@NgModule({
  declarations: [
    RefundOrderComponent
  ],
  imports: [ 
    CommonModule,
    RefundOrderRoutingModule,
    PoModule
  ] ,
  exports:[
    RefundOrderComponent
  ]
})
export class RefundOrderModule { }
