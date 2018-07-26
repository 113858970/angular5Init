/*根服务*/
import { Injectable } from '@angular/core';
import { Router,ActivatedRoute,Params } from '@angular/router'
import { Http, Response, RequestOptions, URLSearchParams,Headers } from '@angular/http';
import { Observable, Observer } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

const url = require('../urls/urls');

@Injectable()
export class RootService {

    private href = window.location.href;
    private test1 = new RegExp('dev');
    private test2 = new RegExp('nebula.qyy');
    private pro = new RegExp('nebula.737');

    constructor (private http: Http,private router:Router, private activatedRoute:ActivatedRoute) {}

    getCookie(name){
      var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
      if(arr=document.cookie.match(reg))
        return arr[2];
      else
        return null;
    }

    //清除cookie    
    clearCookie(name) {    
      this.setCookie(name, "", -1);    
    } 

    setCookie(cname, cvalue, exdays) {  
        var d = new Date();  
        d.setTime(d.getTime() + (exdays*24*60*60*1000));  
        var expires = "expires="+d.toUTCString();   console.log('aa',cname)
        document.cookie = cname + "=" + cvalue + "; " + expires + "; path=/";  
    }  

    /*从cookies获取登录秘钥*/
    getToken(callback){
      let that = this;
      let token = this.getCookie("token");
      var observable = new Observable(function(observer) {
        /*打开token验证*/
        if(token != null){
          callback(token,observer)
        }else{
          that.urlHref()
        }
      });
      return observable;
    }



    /*请求错误*/
    private handleError (error: Response | any) {
        // In a real world app, you might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
          const body = error.json() || '';
          const err = body.error || JSON.stringify(body);
          errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
          errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
      }

   //默认有传app_id
   commonGet(url:string,data:any,access:string,system_id=11,appIdBoolean = true,appId=''){
      let that = this;
        return this.getToken(function(token,observer){
          let params = new URLSearchParams(),headers;
          for(var i in data){
            params.set(i, data[i]);
          }
          if(appIdBoolean){
            //头部需要传递app_id 
            let href = location.href
            let app_id = that.activatedRoute.snapshot.params['id'] 
            let lastLength = location.href.indexOf('?')
            if(appId != ''){
              app_id = appId
            }else{
              if(lastLength > 0){
                app_id = location.href.slice(location.href.lastIndexOf('/')+1,location.href.indexOf('?'))
              }else{
                app_id = location.href.slice(location.href.lastIndexOf('/')+1)
              }
            }
            if(app_id != ''){
              headers = new Headers({
                accept: 'application/json',
                access:access,
                token:token,
                company_id :1,
                app_id:app_id,
                system_id:system_id
              });
            }else{
              headers = new Headers({
                accept: 'application/json',
                access:access,
                token:token,
                company_id :1,
                system_id:system_id
              });
            }
          }else{
            headers = new Headers({
              accept: 'application/json',
              access:access,
              token:token,
              company_id :1,
              system_id:system_id
            });
          }
            let options = new RequestOptions({ headers: headers, search: params});
            that.http.get(url,options).map(response => response.json()).catch(that.handleError).subscribe(res => {
              if(res.code == 2002){
                //登录凭证过期 
                alert(res.msg)
                that.urlHref()
              }else if(res.code == 4001){
                //用户被禁止登录
              alert('账号已被禁用，请与管理员联系')
                that.urlHref()
              }else if(res.code == 4003 || res.code == 4005 || res.code == 4006 ||res.code == 4007 || res.code == 4008 || res.code == 4009){
                //不能登录超管后台   || 没有该系统权限 || 没有权限进行此项操作 ||  游戏已停用 || 该游戏不属于本公司项目|| 没有该游戏权限
                alert('没有权限进行该操作')
                that.urlHrefSystem()
              }else{
                observer.next(res)
              }
            });
        });
   }

   //默认有传app_id
   commonPost(url:string,data:any,access:string,system_id=11,appIdBoolean=true){
      let that = this;
      let formData: FormData = new FormData();
        return this.getToken(function(token,observer){
          let headers;
          if(appIdBoolean){
            //头部需要传递app_id
            let href = location.href
            let app_id = that.activatedRoute.snapshot.params['id']
            let lastLength = location.href.indexOf('?')
            if(lastLength > 0){
              app_id = location.href.slice(location.href.lastIndexOf('/')+1,location.href.indexOf('?'))
            }else{
              app_id = location.href.slice(location.href.lastIndexOf('/')+1)
            }
            if(app_id != ''){
              headers = new Headers({
                accept: 'application/json',
                access:access,
                token:token,
                company_id :1,
                app_id:app_id,
                system_id:system_id
              });
            }else{
              headers = new Headers({
                accept: 'application/json',
                access:access,
                token:token,
                company_id :1,
                system_id:system_id
              });
            }
          }else{
            headers = new Headers({
              accept: 'application/json',
              access:access,
              token:token,
              company_id :1,
              system_id:system_id
            });
          }
          let options = new RequestOptions({ headers: headers });
          for (let k in data) {
            if(typeof(data[k]) == 'object' ){
              for (var i = 0; i < data[k].length; i++) {
                formData.append(k+'[]', data[k][i]);
              }
            }else{
              formData.append(k, data[k]);
            }
          }
          that.http.post(url,formData,options).map(response => response.json()).catch(that.handleError).subscribe(res => {
            if(res.code == 2002){
              //登录凭证过期 
              alert(res.msg)
              that.urlHref()
            }else if(res.code == 4001){
              //用户被禁止登录
            alert('账号已被禁用，请与管理员联系')
              that.urlHref()
            }else if(res.code == 4003 || res.code == 4005 || res.code == 4006 ||res.code == 4007 || res.code == 4008 || res.code == 4009){
              //不能登录超管后台   || 没有该系统权限 || 没有权限进行此项操作 ||  游戏已停用 || 该游戏不属于本公司项目|| 没有该游戏权限
              alert('没有权限进行该操作')
              that.urlHrefSystem()
            }else{
              observer.next(res)
            }
          });
        });
    }

    urlHref(){
      this.clearCookie('token');
      if(this.pro.test(this.href)){
        //正式地址
        window.location.href = '//nebula.737.com'
      }else if(this.test1.test(this.href)){
        //测试地址1
        window.location.href = '//dev-nebula.qyy.com'
      }else if(this.test2.test(this.href) && !this.test1.test(this.href)){
        //测试地址1
        window.location.href = '//nebula.qyy.com'
      }else{
        //本地地址
        window.location.href = '//127.0.0.1'
      }
    }

    urlHrefSystem(){
      if(this.pro.test(this.href)){
        //正式地址
        window.location.href = '//nebula.737.com/home/systemSelect.html'
      }else if(this.test1.test(this.href)){
        //测试地址1
        window.location.href = '//dev-nebula.qyy.com/home/systemSelect.html'
      }else if(this.test2.test(this.href) && !this.test1.test(this.href)){
        //测试地址2
        window.location.href = '//nebula.qyy.com/home/systemSelect.html'
      }else{
        //本地地址
        window.location.href = '//127.0.0.1/systemSelect.html'
      }
    }
}
