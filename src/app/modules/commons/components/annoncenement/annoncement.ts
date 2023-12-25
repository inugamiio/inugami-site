import { Component, Inject, OnInit ,Input } from '@angular/core';

@Component({
  selector: 'annoncement',
  templateUrl: './annoncement.html',
  providers: []
})
export class Annoncement implements  OnInit {
  
    @Input()  title : string|undefined|null="";
    @Input()  application : string|undefined|null="";
    @Input()  version : string|undefined|null="";
    @Input()  date : string|undefined|null="";
    @Input()  tag : string|undefined|null="";

    constructor() {
    }

    ngOnInit() {
        
    }

  
    getAnchor():string{
      return `#${this.application}-${this.version}`;
    }

    getClass(){
      return `annoncement ${this.application}`;
    }
}