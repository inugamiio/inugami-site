import { Component } from '@angular/core';
import { Router ,ResolveEnd} from '@angular/router';
import { TITLE } from './app.page.titles';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'inugami-website';


  constructor (private router: Router) {
    this.router.events.subscribe(val => {
      if(val instanceof ResolveEnd){
        let event = val as ResolveEnd;
        console.info(`${event.urlAfterRedirects}`);

        let title =TITLE[event.urlAfterRedirects];
        if(title==null){
          title=TITLE[''];
        }

        let titleTags= document.getElementsByTagName('title');
        titleTags[0].innerText=title;
      }
    })
}
}
