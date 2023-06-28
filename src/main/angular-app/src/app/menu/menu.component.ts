import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PoBreadcrumb } from '@po-ui/ng-components';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  breadcrumb: PoBreadcrumb = {
    items: [{ label: 'Menu Principal', link: '/' } ]
  };

  navigateToRefund() {
    this.router.navigateByUrl('/refund-order');
  }
  navigateToListRefund(){
    this.router.navigateByUrl('/home');
  }
}
