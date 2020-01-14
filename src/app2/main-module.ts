import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser'; 
import {enableProdMode} from '@angular/core';

import {RouterModule, Routes} from "@angular/router";
import {APP_BASE_HREF} from "@angular/common";

import { App2 } from './app2.component.ts'; 
 
enableProdMode(); 

@NgModule({
  imports: [ 
    BrowserModule,
    RouterModule.forRoot([]),
  ],
  providers:[{
    provide: APP_BASE_HREF, 
    useValue: '/app2/'
  }],
  declarations: [App2],
  bootstrap: [App2]
})

export default class MainModule {
}
