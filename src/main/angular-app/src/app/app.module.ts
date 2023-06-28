import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { APP_CONFIG } from './app.config';
import { ProcessManagementService } from './services/process-management.service';
import { FluigOauthService } from './services/fluig-oauth.service';
import { ProductsConverterService } from './services/products-converter.service';
import { HttpClientModule } from '@angular/common/http';
import { PoModule } from '@po-ui/ng-components';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PoModule
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: APP_CONFIG.APP_BASE || '/' },
    ProcessManagementService,
    FluigOauthService,
    ProductsConverterService
  ],
  exports:[PoModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
