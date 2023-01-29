import { Component, Inject, OnInit ,Input } from '@angular/core';

@Component({
  selector: 'doc-item',
  templateUrl: './doc.item.html',
  providers: []
})
export class DocItem implements  OnInit {
  
    @Input()  href : string="";
    @Input()  level : number=0;
    @Input()  title : string="";

    constructor() {
    }

    ngOnInit() {
        
    }

  
    public isLevel(value:number){
        return value == this.level;
    }

}