import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CountryService, EncryptService, OauthService} from './services';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
  ],
  providers: [
    CountryService,
    OauthService,
    EncryptService
  ]
})
export class CoreModule { }
