import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { powerComponent } from '../component/power.component';
import { powerIndexComponent } from '../component/powerIndex.component';

const routes: Routes = [
  { 
  	path: '',
   	component: powerComponent,
   	children:[
      {path:'index',component:powerIndexComponent},
  	]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PowerRoutingModule { }