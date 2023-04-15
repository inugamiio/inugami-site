import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'
import {RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';

import { HttpServices } from './services/http.services';

import { HomeView } from './views/home.view';
import { Annoncement } from './components/annoncenement/annoncement';
import { DocItem } from './components/doc-item/doc.item';
import { Tips } from './components/tips/tips';
@NgModule({
    declarations: [
        HomeView,
        Annoncement,
        DocItem,
        Tips
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        HighlightModule,
        RouterModule
    ],
    exports: [
        HomeView,
        Annoncement,
        DocItem,
        Tips
    ],
    providers: [
        HttpServices,
        {
            provide: HIGHLIGHT_OPTIONS,
            useValue: {
              fullLibraryLoader: () => import('highlight.js'),
              lineNumbers: true
            }
          }
    ]
})
export class CommonsModule { }
