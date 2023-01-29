import { Component, OnInit } from '@angular/core';
import { HttpServices } from '../../commons/services/http.services';

@Component({
    templateUrl: './inugami.project.analysis.html'
})
export class InugamiProjectAnalysisView  implements  OnInit {

    /**************************************************************************
    * ATTRIBUTES
    **************************************************************************/
    
    /**************************************************************************
    * CONSTRUCTORS
    **************************************************************************/
    constructor(private httpService : HttpServices) {
    }
    ngOnInit(): void {
    
    }
  


  
}