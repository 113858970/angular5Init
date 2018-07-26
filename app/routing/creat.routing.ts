import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { creatComponent } from '../component/creat.component';
import { creatIndexComponent } from '../component/creatIndex.component';

const routes: Routes = [
  { 
  	path: '',
   	component: creatComponent,
   	children:[
      {path:'index',component:creatIndexComponent},
  	]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreatRoutingModule { }