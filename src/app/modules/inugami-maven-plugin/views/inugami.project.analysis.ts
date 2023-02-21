import { Component, OnInit } from '@angular/core';
import { GoogleAnalyticsService } from 'ngx-google-analytics';
import { HttpServices } from '../../commons/services/http.services';
import { cleanContent } from '../../commons/services/string.tools';

@Component({
    templateUrl: './inugami.project.analysis.html'
})
export class InugamiProjectAnalysisView  implements  OnInit {

    /**************************************************************************
    * ATTRIBUTES
    **************************************************************************/
     public sourceCode : any = {};
     

    /**************************************************************************
    * CONSTRUCTORS
    **************************************************************************/
    constructor(private httpService : HttpServices,
                private googleAnalytics:GoogleAnalyticsService) {
    }
    ngOnInit(): void {
        this.googleAnalytics.pageView("/inugami-project-analysis-maven-plugin");
        this.httpService.getSourceCode("data/inugami-maven-plugin/source_code.xml").then(data=> this.initData(data));
    }
  
    private initData(values:string){
        this.sourceCode['empty'] ="";

        let parser = new DOMParser();
        let node = parser.parseFromString(values,"text/xml");
        let sources = node.getElementsByTagName("src");
        
        for(let i=0; i<sources.length; i++){
            let sourceNode    = sources[i];
            let sourceName    :string = sourceNode.getAttribute('name') ?? '';
            let sourceContent :string = cleanContent(sourceNode.textContent ?? '');
            this.sourceCode[sourceName] =sourceContent;
        }

    }

  
}