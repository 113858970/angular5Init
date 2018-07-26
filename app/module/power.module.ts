/* 模块引用 */
import { NgModule }           from '@angular/core';
import { RouterModule,Routes }   from '@angular/router';
import { ShareModule }   from './share.module';

import { powerComponent } from '../component/power.component';

import { powerIndexComponent } from '../component/powerIndex.component';

import { PowerRoutingModule } from '../routing/power.routing';

import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    //依赖模块
    imports:[
        //共享模块
        ShareModule,
        //路由模块
        PowerRoutingModule,
        ReactiveFormsModule,
        NgZorroAntdModule.forRoot()
    ],
    declarations:[        
      powerComponent,
      powerIndexComponent,
    ],
    //特性模块暴露出的组件
    exports:[

    ]
})

export class PowerModule{}



