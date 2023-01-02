import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent, WelcomeComponent } from './home/pages';

const routes: Routes = [
  {path: "", component: WelcomeComponent},
  {path: "about", component: AboutusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
