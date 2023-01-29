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
     public gav:string ="";
     public builder:string ="";
     public consumerWithException:string ="";
     public errorCodeResolver:string ="";
     

     
    /**************************************************************************
    * CONSTRUCTORS
    **************************************************************************/
    constructor(private httpService : HttpServices) {
    }
    ngOnInit(): void {

        this.httpService.getSourceCode("data/inugami_api/gav.txt").then(data=> this.gav = data);
        this.httpService.getSourceCode("data/inugami_api/builder.txt").then(data=> this.builder = data);
        this.httpService.getSourceCode("data/inugami_api/consumer_with_exception.txt").then(data=> this.consumerWithException = data);
        this.httpService.getSourceCode("data/inugami_api/error_code_resolver.txt").then(data=> this.errorCodeResolver = data);

      
    
    }
  


  
}