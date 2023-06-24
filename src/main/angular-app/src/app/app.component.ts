import { Component } from '@angular/core';
import { PoMenuItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  readonly menus: Array<PoMenuItem> = [
    { label: 'Dashboard', link: '/', icon: 'po-icon-home', shortLabel: 'Home' },
    { label: 'Solicitação de Reembolso', link: '/', icon: 'po-icon-home', shortLabel: 'Solicitação de Reembolso' },
    { label: 'Reembolsos Finalizados', link: '/', icon: 'po-icon-home', shortLabel: 'Rembolsos Finalizados' },
  ]
}
