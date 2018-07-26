/* 模块引用 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes }   from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HttpModule } from '@angular/http';
import { NoopAnimationsModule ,BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgZorroAntdModule } from 'ng-zorro-antd';

/* 组件引用 */
import { ShareModule }   from './share.module';
import { AppComponent } from '../component/app.component';

// import { componentHeader } from '../component/componentHeader.component';
// import { componentNav } from '../component/componentNav.component'
/* 服务引用 */
import { RootService } from '../service/root.service';
import { qnService } from '../service/qn.service';
import { optionsService } from '../service/options.service';

/*路由引用*/
import { AppRoutingModule } from '../routing/app.routing';

@NgModule({
    //依赖模块
    imports: [
        //支持性模块
        BrowserModule,
        //http模块
        HttpModule,
        //路由
        AppRoutingModule,
        NoopAnimationsModule,
        NgZorroAntdModule.forRoot()
    ],
    //模块组件&指令&管道
    declarations: [
        //根组件
        AppComponent,
        //头部组件
        //componentHeader,
        //侧边栏组件
        //componentNav,
        
    ],
    //注册服务
    providers: [
        {provide: LocationStrategy, useClass: HashLocationStrategy},
        [RootService,qnService,optionsService]
    ],
    //根组件
    bootstrap: [ AppComponent ]
})
export class AppModule {}