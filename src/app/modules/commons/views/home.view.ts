import { Component, OnInit } from '@angular/core';
import { HttpServices } from '../services/http.services';

import { GoogleAnalyticsService } from 'ngx-google-analytics';

import {Annoncement,AnnoncementExample,AnnoncementItem} from '../models/annoncement.model';
@Component({
    templateUrl: './home.view.html',
    styleUrls: ['./home.view.scss']
})
export class HomeView  implements  OnInit {

    /**************************************************************************
    * ATTRIBUTES
    **************************************************************************/
    public annoncements : Annoncement[] = [];
    public code:string ="";

    public jsonAppenderElasticSearch:string= `

    `;

    public jsonAppenderHeaders:string= `

        `;



    public jsonAppenderAsJson:string= `

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

        this.httpService.getSourceCode("data/annoncements.xml").then(data=> this.initData(data));

        
    }
  

    private initData(values:string){
        const parser = new DOMParser();
        const node = parser.parseFromString(values,"text/xml");
        const annoncements = node.getElementsByTagName("annoncements")[0];
        
        
        for(let i=0; i<annoncements.childNodes.length; i++){
            if(annoncements.childNodes[i].nodeName == 'annoncement' ){
                this.annoncements.push(this.parseAnnoncement(annoncements.childNodes[i] as Element));
            }
        }
    }
    private parseAnnoncement(node:Element):Annoncement {
        let features: AnnoncementItem[] =[];
        let fix: AnnoncementItem[] =[];
        let description = null;
        for(let i=0; i<node.childNodes.length; i++){
            if(node.childNodes[i].nodeName == 'features' ){
                for(let j=0; j<node.childNodes[i].childNodes.length; j++){
                    if(node.childNodes[i].childNodes[j].nodeName == 'item' ){
                        features.push(this.parseAnnoncementItem(node.childNodes[i].childNodes[j] as Element));
                    }
                }
            }
            if(node.childNodes[i].nodeName == 'fix' ){
                for(let j=0; j<node.childNodes[i].childNodes.length; j++){
                    if(node.childNodes[i].childNodes[j].nodeName == 'item' ){
                        fix.push(this.parseAnnoncementItem(node.childNodes[i].childNodes[j] as Element));
                    }
                }
            }
            if(node.childNodes[i].nodeName == 'description' ){
                description= this.getNodeText(node.childNodes[i] as Element);
            }
        }

        return {
            application : node.getAttribute('application'),
            version : node.getAttribute('version'),
            date : node.getAttribute('date'),
            features: features,
            fix:fix,
            description:description
        };
    }

    private parseAnnoncementItem(node:Element):AnnoncementItem {
        let examples : AnnoncementExample[] = [];
        for(let i=0; i<node.childNodes.length; i++){
            if(node.childNodes[i].nodeName == 'example' ){
                examples.push(this.parseExample(node.childNodes[i] as Element));
            }
        }


        return {
            link:  node.getAttribute('link'),
            title:  node.getAttribute('title'),
            examples: examples
        };
    }
    
    private parseExample(node:Element): AnnoncementExample{
        let value = null;
        let description = null;

        for(let i=0; i<node.childNodes.length; i++){
            if(node.childNodes[i].nodeName == 'description' ){
                description = this.getNodeText(node.childNodes[i]  as Element);
            }
            if(node.childNodes[i].nodeName == 'value' ){
                value = this.getNodeText(node.childNodes[i]  as Element);
            }
        }

        return {
            value: value==null?'':value,
            description : description,
            type: node.getAttribute('type')
        }
    }

    getNodeText(node:Element):string{
        const result :string[] = [];

        for(let i=0; i<node.childNodes.length; i++){
            if(node.childNodes[i].nodeName == '#text' ){
                result.push((node.childNodes[i] as Text).data.replaceAll('\n' , ' ')) ;
            }
            if(node.childNodes[i].nodeName == '#cdata-section' ){
                result.push((node.childNodes[i] as CDATASection).data) ;
            }

            
        }
        return result.join(" ");
    }


    getTitle(annoncement: Annoncement):string{
        return `${annoncement.application} ${annoncement.version}`;
    }

    getExampleType(example:AnnoncementExample):string{
        return example==null|| example.type==null? 'xml' : example.type;
    }
  
}