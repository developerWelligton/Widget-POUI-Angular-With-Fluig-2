import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PoBreadcrumb, PoCalendarMode, PoCheckboxGroupOption, PoInfoOrientation, PoRadioGroupOption, PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'app-refund-order',
  templateUrl: './refund-order.component.html',
  styleUrls: ['./refund-order.component.scss']
})
export class RefundOrderComponent implements OnInit {

  constructor(   private router: Router){

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  } 
  
  onClick(){
    
  }
  breadcrumb: PoBreadcrumb = {
    items: [{ label: 'Menu Principal', link: '/'},{label: 'Solicitar Reembolso', link: '/'} ]
  };

  navigateToMenu(){
    this.router.navigateByUrl('/menu');
  } 
  
}
