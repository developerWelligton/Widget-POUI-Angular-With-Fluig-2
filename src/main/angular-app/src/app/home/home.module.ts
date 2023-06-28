import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HomeRoutingModule } from './home.routing.module';
import { PoModule, PoStepperModule ,} from '@po-ui/ng-components'; 
@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PoModule,
    PoStepperModule 
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
