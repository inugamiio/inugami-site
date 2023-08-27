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

    public jsonAppenderElasticSearch:string= `
    <appender name="elasticsearch" class="io.inugami.logs.obfuscator.appender.JsonAppender">
     <configuration>
         <encodeAsJson>true</encodeAsJson>
         <mode>elasticsearch</mode>
         <host>http://localhost:9200/_bulk</host>
         <index>application-index</index>
         <additionalFields>
             {
             "additionalField":"test",
             "groupId":"io.inugami",
             "artifactId":"app",
             "version":"1.0.0"
             }
         </additionalFields>
     </configuration>
    </appender>
    `;

    public jsonAppenderHeaders:string= `
    <appender name="logstash" class="io.inugami.logs.obfuscator.appender.JsonAppender">
        <configuration>
            <encodeAsJson>true</encodeAsJson>
            <mode>logstash</mode>
            <host>http://localhost:5054</host>
            <additionalFields>
                {
                "additionalField":"test"
                }
            </additionalFields>
            <headers>
                {
                    "Authorization":"token 7a0364da-657c-4245-8ffc-b5ea896cc484"
                }
            </headers>
        </configuration>
    </appender>
        `;


    
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