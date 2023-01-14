import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddJobComponent, LoginComponent, SignupComponent} from './pages';

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "job/add",
    component: AddJobComponent
  },
  {
    path: "signup",
    component: SignupComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
