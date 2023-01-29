import { Component, OnInit } from '@angular/core';
import { HttpServices } from '../services/http.services';

@Component({
    templateUrl: './home.view.html',
    styleUrls: ['./home.view.scss']
})
export class HomeView  implements  OnInit {

    /**************************************************************************
    * ATTRIBUTES
    **************************************************************************/
    public code:string ="";

    public java: string[]=['java'];
    /**************************************************************************
    * CONSTRUCTORS
    **************************************************************************/
    constructor(private httpService : HttpServices) {
    }
    ngOnInit(): void {
        this.httpService.getSourceCode("data/ConsumerWithException.txt")
        .then(data=> this.code = data);
    }
  


  
}