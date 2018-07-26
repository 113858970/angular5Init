import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { listComponent } from '../component/list.component';
import { listIndexComponent } from '../component/listIndex.component';

const routes: Routes = [
  { 
  	path: '',
   	component: listComponent,
   	children:[
      {path:'index',component:listIndexComponent},
  	]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListRoutingModule { }