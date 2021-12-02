import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './form-routing.module';
import { InputSelectComponent } from './page/input-select/input-select.component';
import { BootstrapFormModule } from 'mw2021-library';



@NgModule({
  declarations: [
    InputSelectComponent
  ],
  imports: [
    CommonModule,
    FormRoutingModule,
    BootstrapFormModule
  ]
})
export class FormModule { }
