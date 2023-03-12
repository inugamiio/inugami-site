import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'
import {RouterModule} from '@angular/router';
import { CommonsModule } from '../commons/commons.module';

import { NgModule } from '@angular/core';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';


import { InugamiView } from './views/inugami.view';

import { InugamiAsideMenu } from './components/inugami-aside-menu/inugami.aside.menu';

import { InugamiApiView } from '../inugami/views/inugami.api.view';
import { InugamiApiToc } from './components/inugami-aside-menu/inugami.api.toc';

import { InugamiCommonsTestView } from '../inugami/views/inugami_commons_test/inugami_commons_test';
import { InugamiCommonsTestToc } from '../inugami/views/inugami_commons_test/inugami_commons_test_toc';

@NgModule({
    declarations: [
        InugamiView,
        InugamiAsideMenu,
        InugamiApiView,
        InugamiApiToc,
        InugamiCommonsTestView,
        InugamiCommonsTestToc
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        RouterModule,
        ReactiveFormsModule,
        HighlightModule,
        CommonsModule
    ],
    exports: [
        InugamiView,
        InugamiAsideMenu,
        InugamiApiView,
        InugamiApiToc,
        InugamiCommonsTestView,
        InugamiCommonsTestToc
    ]
})
export class InugamiModule { }
