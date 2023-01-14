import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { SharedModule } from '../shared';


import { QuillModule } from 'ngx-quill';
import { TextEditorComponent } from './components';
import { AddJobComponent, LoginComponent } from './pages';
import {ReactiveFormsModule} from "@angular/forms";
import {TextEditorService} from "./services";
import { SignupComponent } from './pages/signup/signup.component';

@NgModule({
  declarations: [
    LoginComponent,
    TextEditorComponent,
    AddJobComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    QuillModule.forRoot()
  ],
  providers: [
    TextEditorService
  ]
})
export class CompanyModule { }
