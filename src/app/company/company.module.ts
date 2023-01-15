import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { SharedModule } from '../shared';


import { QuillModule } from 'ngx-quill';
import {TextEditorComponent, VerificationComponent} from './components';
import {AddJobComponent, LoginComponent, SignupComponent} from './pages';
import {ReactiveFormsModule} from "@angular/forms";
import {TextEditorService} from "./services";

@NgModule({
  declarations: [
    LoginComponent,
    TextEditorComponent,
    AddJobComponent,
    SignupComponent,
    VerificationComponent
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
