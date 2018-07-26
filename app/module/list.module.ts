/* 模块引用 */
import { NgModule }           from '@angular/core';
import { RouterModule,Routes }   from '@angular/router';
import { ShareModule }   from './share.module';

import { listComponent } from '../component/list.component';

import { listIndexComponent } from '../component/listIndex.component';

import { ListRoutingModule } from '../routing/list.routing';

import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    //依赖模块
    imports:[
        //共享模块
        ShareModule,
        //路由模块
        ListRoutingModule,
        ReactiveFormsModule,
        NgZorroAntdModule.forRoot()
    ],
    declarations:[        
      listComponent,
      listIndexComponent,
    ],
    //特性模块暴露出的组件
    exports:[

    ]
})

export class ListModule{}



