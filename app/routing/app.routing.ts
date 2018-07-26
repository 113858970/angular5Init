import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'index', loadChildren: '../module/index.module#IndexModule' },
  { path: 'creat', loadChildren: '../module/creat.module#CreatModule' },
  { path: 'list', loadChildren: '../module/list.module#ListModule' },
  { path: 'power', loadChildren: '../module/power.module#PowerModule' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
