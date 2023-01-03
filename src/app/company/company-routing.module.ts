import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddJobComponent, LoginComponent } from './pages';

const routes: Routes = [
  {
    path: "login", 
    component: LoginComponent
  }, 
  {
    path: "job/add",
    component: AddJobComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
