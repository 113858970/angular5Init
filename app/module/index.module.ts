/* 模块引用 */
import { NgModule }           from '@angular/core';
import { RouterModule,Routes }   from '@angular/router';
import { ShareModule }   from './share.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { indexComponent } from '../component/index.component';
import { IndexRoutingModule } from '../routing/index.routing';


@NgModule({
    //依赖模块
    imports:[
        //共享模块
        ShareModule,
        //路由模块
        IndexRoutingModule,
        NgZorroAntdModule,
        ReactiveFormsModule
    ],
    declarations:[        
      indexComponent
    ],
})

export class IndexModule{}
