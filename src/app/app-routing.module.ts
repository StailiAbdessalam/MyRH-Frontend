import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './auth-guard.guard';
import { CompanyModule } from './company';
import { AboutusComponent, WelcomeComponent } from './home';
import { JobModule } from './job';
import {CallbackComponent} from "./callback/callback.component";

const routes: Routes = [
  {
    path: "",
    component: WelcomeComponent,
    canActivate: [AuthGuardGuard]
    },
  {
    path: "about",
    component: AboutusComponent
  },
  {
    path: "callback",
    component: CallbackComponent
  },
  {
    path: "jobs",
    loadChildren: () => JobModule,
    canActivate: [AuthGuardGuard]
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
