import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component'
import { CreateComponent } from './create/create.component'
import { ListComponent } from './list/list.component'
import { SurveyComponent } from './survey/survey.component'

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'create', component: CreateComponent},
  { path: 'list', component: ListComponent},
  { path: 'survey', component: SurveyComponent},
  { path: '', pathMatch: 'full', redirectTo: '/login' },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
