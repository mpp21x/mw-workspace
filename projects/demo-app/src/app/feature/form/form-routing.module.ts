import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InputSelectComponent} from './page/input-select/input-select.component';
import {DatetimePickerComponent} from './page/datetime-picker/datetime-picker.component';

const routes: Routes = [
  {
    path: 'input-select',
    component: InputSelectComponent
  },
  {
    path: 'datetime-picker',
    component: DatetimePickerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormRoutingModule { }
