import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PoBreadcrumb, PoButtonGroupItem, PoChartType, PoNotificationService, PoTableColumn  } from '@po-ui/ng-components';
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
    private router: Router ,private poNotification: PoNotificationService ) {}

  ngOnInit() {}
 

  newRefundOrder() {
    this.router.navigateByUrl('/refund-order');
  }
  navigateToMenu(){
    this.router.navigateByUrl('/menu');
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
 
   
  attendances: Array<PoButtonGroupItem> = [
    { label: 'Appointment', icon: 'po-icon-calendar', action: this.getPassword.bind(this) },
    { label: 'Emergency', icon: 'po-icon-injector', action: this.getPassword.bind(this) },
    { label: 'Exams', icon: 'po-icon-exam', action: this.getPassword.bind(this) }
  ];
 

  getPassword(attendance) {
    const password = this.randomPassword();
    const typeNotification = this.getTypeNotification(attendance.label);

    this.poNotification[typeNotification](`
      Type of attendance: ${attendance.label} -
      Your password: ${password}
    `);
  }

  getTypeNotification(label: string = ''): string {
    switch (label) {
      case 'Emergency':
        return 'error';
      case 'Appointment':
        return 'information';
      case 'Exams':
        return 'success';
    }
  }

  randomPassword() {
    return Math.random().toString().slice(2, 5);
  }
 
  breadcrumb: PoBreadcrumb = {
    items: [{ label: 'Menu Principal', link: '/'},{label: 'Reembolso', link: '/'} ]
  };
  /*
    breadcrumb: PoBreadcrumb = {
    items: [{ label: 'Home', link: '/' }, { label: 'Pipelines', link: '/' }, { label: 'Background Process Scheduler' }]
  };*/
  srcImage = './../../../assets/comprador.svg';

  
}
