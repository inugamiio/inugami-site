import { Component, Inject, OnInit ,Input } from '@angular/core';

@Component({
  selector: 'tips',
  templateUrl: './tips.html',
  providers: []
})
export class Tips implements  OnInit {
  
    @Input()  title : string="";
    @Input()  type : string="";

    constructor() {
    }

    ngOnInit() {
        
    }

  

}