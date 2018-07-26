import { NgModule }            from '@angular/core';
import { RouterModule }   from '@angular/router';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';

import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FileUploadModule } from 'ng2-file-upload';


@NgModule({
    //依赖模块
    imports:[
        CommonModule,
        //表单模块
        FormsModule,
        //路由模块
        RouterModule,
        FileUploadModule,
        NgZorroAntdModule.forRoot()
    ],
    declarations:[
    ],
    //特性模块暴露出的组件
    exports:[
        CommonModule,
        FormsModule,
       
    ]
})
export class ShareModule { }
