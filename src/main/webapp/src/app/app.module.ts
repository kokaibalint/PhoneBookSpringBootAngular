import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Router, RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { NagivationsComponent } from './nagivations/nagivations.component';
import { AddressComponent } from './address/address.component';
import { from } from 'rxjs';
import { AddressFilterPipe } from './shared/address-filter.pipe';

const appRoutes: Routes = [
  {
    path: 'address',
    component: AddressComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NagivationsComponent,
    AddressComponent,
    AddressFilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
