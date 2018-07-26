import { Injectable } from '@angular/core';


@Injectable()
export class optionsService {
    data = {

    }
    constructor () {
    }

    get(name:any){
        return this.data[name];
    }

    set(name:any,updata:any){
        this.data[name] = updata;
    }

}
