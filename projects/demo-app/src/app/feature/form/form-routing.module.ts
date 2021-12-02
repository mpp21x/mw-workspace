import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InputSelectComponent} from './page/input-select/input-select.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'input-select',
    pathMatch: 'full',
  },
  {
    path: 'input-select',
    component: InputSelectComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormRoutingModule { }
