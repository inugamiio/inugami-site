import { Component, OnInit } from '@angular/core';
import { HttpServices } from '../../commons/services/http.services';
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
    constructor(private httpService : HttpServices) {
    }
    ngOnInit(): void {
    
    }
  


  
}