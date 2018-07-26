import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common'
//require('../css/common');
import { qnService } from '../service/qn.service'
import { optionsService } from '../service/options.service';

@Component({
  selector: "ms-web",
  template: `
   <router-outlet></router-outlet>
  `
})

export class AppComponent implements OnInit {
	ngOnInit() {
        
    }
}