import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { JobSearchBarComponent, NavbarComponent, FooterComponent } from './components';


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    JobSearchBarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ], 
  exports : [
    NavbarComponent,
    FooterComponent, 
    JobSearchBarComponent,
    FormsModule
  ]
})
export class SharedModule { }
