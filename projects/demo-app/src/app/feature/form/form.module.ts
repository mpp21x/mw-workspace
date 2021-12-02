import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './form-routing.module';
import { InputSelectComponent } from './page/input-select/input-select.component';
import { BootstrapFormModule } from 'mw2021-library';
import { DatetimePickerComponent } from './page/datetime-picker/datetime-picker.component';



@NgModule({
  declarations: [
    InputSelectComponent,
    DatetimePickerComponent
  ],
  imports: [
    CommonModule,
    FormRoutingModule,
    BootstrapFormModule
  ]
})
export class FormModule { }
