import { Component, Inject, OnInit ,Input } from '@angular/core';

@Component({
  selector: 'annoncement',
  templateUrl: './annoncement.html',
  providers: []
})
export class Annoncement implements  OnInit {
  
    @Input()  title : string="";
    @Input()  date : string="";
    @Input()  tag : string="";

    constructor() {
    }

    ngOnInit() {
        
    }

  

}