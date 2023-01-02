import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { JobSearchBarComponent } from './components/job-search-bar/job-search-bar.component';



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
