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

@NgModule({
    declarations: [
        HomeView,
        Annoncement,
        DocItem
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
        DocItem
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
