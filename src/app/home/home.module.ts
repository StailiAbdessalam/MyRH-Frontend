import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { SharedModule } from '../shared';


@NgModule({
  declarations: [
    WelcomeComponent,
    AboutusComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
