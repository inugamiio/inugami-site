import { Component, OnInit } from '@angular/core';
import { GoogleAnalyticsService } from 'ngx-google-analytics';
import { HttpServices } from '../../../commons/services/http.services';
import { InugamiAsideMenu } from '../../components/inugami-aside-menu/inugami.aside.menu';
import { cleanContent } from '../../../commons/services/string.tools';


@Component({
    templateUrl: './inugami_commons_spring.html'
})
export class InugamiCommonsSpringView  implements  OnInit {

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
        this.googleAnalytics.pageView("/inugami/inugami_commons_spring");
        this.httpService.getSourceCode("data/inugami.xml").then(data=> this.initData(data));
        this.httpService.getSourceCode("data/inugami_commons_spring/source_code.xml").then(data=> this.initData(data));
        
    }
  

    private initData(values:string){
        this.sourceCode['empty'] ="";

        this.sourceCode['configHandler_someValue'] ="{{someValue}}";
        this.sourceCode['configHandler_myFunction'] ="#{myFunction(param1, param2)}";
        this.sourceCode['interface_full_name'] ="{{interface.full.name}}";
        this.sourceCode['tuple_title'] ="Tuple<K, V>";

        
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