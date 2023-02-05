import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'
import {RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';

import { InugamiProjectAnalysisView } from './views/inugami.project.analysis';
import { InugamiPluginToc } from './components/inugami_plugin_toc/inugami.plugin.toc';
import { InugamiPluginAsideMenu } from './components/inugami_plugin_aside_menu/inugami.plugin.aside.menu';


@NgModule({
    declarations: [
        InugamiProjectAnalysisView,
        InugamiPluginToc,
        InugamiPluginAsideMenu
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
        
    ]
})
export class InugamiMavenPluginModule { }
