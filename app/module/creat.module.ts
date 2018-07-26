/* 模块引用 */
import { NgModule }           from '@angular/core';
import { RouterModule,Routes }   from '@angular/router';
import { ShareModule }   from './share.module';

import { creatComponent } from '../component/creat.component';

import { creatIndexComponent } from '../component/creatIndex.component';

import { CreatRoutingModule } from '../routing/creat.routing';

import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    //依赖模块
    imports:[
        //共享模块
        ShareModule,
        //路由模块
        CreatRoutingModule,
        ReactiveFormsModule,
        NgZorroAntdModule.forRoot()
    ],
    declarations:[        
      creatComponent,
      creatIndexComponent,
    ],
    //特性模块暴露出的组件
    exports:[

    ]
})

export class CreatModule{}



