import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PoChartType, PoTableColumn  } from '@po-ui/ng-components';
import { PoDialogService } from '@po-ui/ng-components';
import { PoChartSerie } from '@po-ui/ng-components';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
   

  constructor(
    private poAlert: PoDialogService,
    private router: Router  ) {}

  ngOnInit() {}
 

  newRefundOrder() {
    this.router.navigateByUrl('/refund-order');
  }
 
 
  columns = [
    { property: 'transportValue', label: 'Valor do Transporte' },
    { property: 'foodAllowance', label: 'Vale Alimentação' },
    { property: 'receipt', label: 'Comprovante', type: 'link', action: this.openLink.bind(this) },
    { property: 'date', label: 'Data', type: 'date' },
    { property: 'actions', label: 'Editar', type: 'icon', icons: [
      { action: this.editItem.bind(this), color: 'color-11', icon: 'po-icon-edit', tooltip: 'Editar' },
    ] },
    {property: 'actions', label: 'Excluir', type: 'icon', icons: [ 
      { action: this.deleteItem.bind(this), color: 'color-07', icon: 'po-icon-delete', tooltip: 'Excluir' },
    ]} 
  ];
 

  editItem(item) {
    this.newRefundOrder()
  }

  deleteItem(item) {
    // Lógica para excluir item
  }

  openLink(link) {
    // Lógica para abrir link
  }
 
   
 
 
  
}
