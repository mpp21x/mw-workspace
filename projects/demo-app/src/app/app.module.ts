import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SharedModule} from './common-ui/shared/shared.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MwModule} from 'mw2021-library';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    SharedModule,
    MwModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
