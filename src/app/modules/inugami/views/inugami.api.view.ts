import { Component, OnInit } from '@angular/core';
import { HttpServices } from '../../commons/services/http.services';
import { InugamiAsideMenu } from '../components/inugami-aside-menu/inugami.aside.menu';

@Component({
    templateUrl: './inugami.api.view.html'
})
export class InugamiApiView  implements  OnInit {

    /**************************************************************************
    * ATTRIBUTES
    **************************************************************************/
    public sourceCode : any = {};
     
     
    /**************************************************************************
    * CONSTRUCTORS
    **************************************************************************/
    constructor(private httpService : HttpServices) {
    }
    ngOnInit(): void {
        this.httpService.getSourceCode("data/inugami_api/source_code.xml").then(data=> this.initData(data));
    }
  

    private initData(values:string){
        this.sourceCode['empty'] ="";

        this.sourceCode['configHandler_someValue'] ="{{someValue}}";
        this.sourceCode['configHandler_myFunction'] ="#{myFunction(param1, param2)}";

        let parser = new DOMParser();
        let node = parser.parseFromString(values,"text/xml");
        let sources = node.getElementsByTagName("src");
        
        for(let i=0; i<sources.length; i++){
            let sourceNode    = sources[i];
            let sourceName    :string = sourceNode.getAttribute('name') ?? '';
            let sourceContent :string = this.cleanContent(sourceNode.textContent ?? '');
            this.sourceCode[sourceName] =sourceContent;
        }
    }

    private cleanContent(value:string):string{
        let result : string[] =[];
        let buffer : string[] =[];

        let line = value.split("\n");

        let enableClean = false;
        for(let i=0; i<line.length; i++){
            if(enableClean || line[i].trim()!=''){
                buffer.push(line[i]);
                enableClean = true;
            }
        }
        enableClean = false;
        for(let i=buffer.length-1; i>=0; i--){
            if(enableClean || buffer[i].trim()!=''){
                result.push(buffer[i]);
                enableClean = true;
            }
        }

        result.reverse();

        return result.join('\n');
    }
  
}