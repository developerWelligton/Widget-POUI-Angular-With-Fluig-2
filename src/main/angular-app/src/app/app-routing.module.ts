import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'menu', loadChildren: () => import('./menu/menu.module').then(m => m.MenuModule), pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'purchase-order', loadChildren: () => import('./purchase-order/purchase-order.module').then(m => m.PurchaseOrderModule) },
  { path: 'supplier-quotation', loadChildren: () => import('./supplier-quotation/supplier-quotation.module').then(m => m.SupplierQuotationModule) },
  { path: 'refund-order', loadChildren: () => import('./refund-order/refund-order.module').then(m => m.RefundOrderModule) },
  { path: '**', redirectTo: 'menu' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
