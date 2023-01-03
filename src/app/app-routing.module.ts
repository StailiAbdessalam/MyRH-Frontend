import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyModule } from './company';
import { AboutusComponent, WelcomeComponent } from './home/pages';
import { JobModule } from './job';

const routes: Routes = [
  {
    path: "",
    component: WelcomeComponent
  },
  {
    path: "about",
    component: AboutusComponent
  }, 
  {
    path: "jobs",
    loadChildren: () => JobModule
  }, 
  {
    path: "company",
    loadChildren: () => CompanyModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
