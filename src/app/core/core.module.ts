import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryService, SecurityService } from './services';
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
    SecurityService
  ]
})
export class CoreModule { }
