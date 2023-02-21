import { Component, OnInit } from '@angular/core';
import { HttpServices } from '../../commons/services/http.services';
import { GoogleAnalyticsService } from 'ngx-google-analytics';
import { InugamiAsideMenu } from '../components/inugami-aside-menu/inugami.aside.menu';

@Component({
    templateUrl: './inugami.view.html'
})
export class InugamiView  implements  OnInit {

    /**************************************************************************
    * ATTRIBUTES
    **************************************************************************/
    
    /**************************************************************************
    * CONSTRUCTORS
    **************************************************************************/
    constructor(private httpService : HttpServices,
        private googleAnalytics:GoogleAnalyticsService) {
    }
    ngOnInit(): void {
        this.googleAnalytics.pageView("/inugami");
    }
  


  
}