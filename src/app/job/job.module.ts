import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobRoutingModule } from './job-routing.module';
import { SharedModule } from '../shared';
import { JobsComponent } from './pages';
import { JobPostComponent, JobDescriptionComponent } from './components';


@NgModule({
  declarations: [
    JobsComponent,
    JobPostComponent,
    JobDescriptionComponent
  ],
  imports: [
    CommonModule,
    JobRoutingModule,
    SharedModule
  ]
})
export class JobModule { }
