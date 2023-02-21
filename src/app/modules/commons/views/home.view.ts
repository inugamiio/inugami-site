import { Component, OnInit } from '@angular/core';
import { HttpServices } from '../services/http.services';

import { GoogleAnalyticsService } from 'ngx-google-analytics';

@Component({
    templateUrl: './home.view.html',
    styleUrls: ['./home.view.scss']
})
export class HomeView  implements  OnInit {

    /**************************************************************************
    * ATTRIBUTES
    **************************************************************************/
    public code:string ="";

    
    /**************************************************************************
    * CONSTRUCTORS
    **************************************************************************/
    constructor(private httpService : HttpServices,
                private googleAnalytics:GoogleAnalyticsService) {
    }
    ngOnInit(): void {
        this.googleAnalytics.pageView("/home");
        this.httpService.getSourceCode("data/ConsumerWithException.txt")
        .then(data=> this.code = data);

        
    }
  


  
}