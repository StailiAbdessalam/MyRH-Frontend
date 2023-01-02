import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobRoutingModule } from './job-routing.module';
import { JobsComponent } from './pages/jobs/jobs.component';
import { JobPostComponent } from './components/job-post/job-post.component';


@NgModule({
  declarations: [
    JobsComponent,
    JobPostComponent
  ],
  imports: [
    CommonModule,
    JobRoutingModule
  ]
})
export class JobModule { }
