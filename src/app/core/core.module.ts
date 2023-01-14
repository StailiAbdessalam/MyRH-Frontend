import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryService, OauthService } from './services';
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
    OauthService
  ]
})
export class CoreModule { }
