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

import { InugamiCommonsView } from './views/inugami_commons/inugami_commons'; 
import { InugamiCommonsToc } from './views/inugami_commons/inugami_commons_toc';


import { InugamiCommonsSpringView} from './views/inugami_commons_spring/inugami_commons_spring'; 
import { InugamiCommonsSpringToc } from './views/inugami_commons_spring/inugami_commons_spring_toc';

import { InugamiCommonsTestView } from '../inugami/views/inugami_commons_test/inugami_commons_test';
import { InugamiCommonsTestToc } from '../inugami/views/inugami_commons_test/inugami_commons_test_toc';

import { InugamiLogsObfuscatorToc } from './views/inugami_logs_obfuscator/inugami_logs_obfuscator_toc';
import { InugamiLogsObfuscatorView } from './views/inugami_logs_obfuscator/inugami_logs_obfuscator';


import { InugamiMonitoringApiToc } from './views/inugami_monitoring_api/inugami_monitoring_api_toc';
import { InugamiMonitoringApiView } from './views/inugami_monitoring_api/inugami_monitoring_api';

import { InugamiMonitoringCoreToc } from './views/inugami_monitoring_core/inugami_monitoring_core_toc';
import { InugamiMonitoringCoreView } from './views/inugami_monitoring_core/inugami_monitoring_core';

import { InugamiMonitoringProvidersToc } from './views/inugami_monitoring_providers/inugami_monitoring_providers_toc';
import { InugamiMonitoringProvidersView } from './views/inugami_monitoring_providers/inugami_monitoring_providers';


import { InugamiMonitoringSensorsToc } from './views/inugami_monitoring_sensors/inugami_monitoring_sensors_toc';
import { InugamiMonitoringSensorsView } from './views/inugami_monitoring_sensors/inugami_monitoring_sensors';

import { InugamiMonitoringSpringbootToc } from './views/inugami_monitoring_springboot/inugami_monitoring_springboot_toc';
import { InugamiMonitoringSpingbootView } from './views/inugami_monitoring_springboot/inugami_monitoring_springboot'; 

import { InugamiMonitoringSpringbootActivemqToc } from './views/inugami_monitoring_springboot_activemq/inugami_monitoring_springboot_activemq_toc';
import { InugamiMonitoringSpringbootActivemqView } from './views/inugami_monitoring_springboot_activemq/inugami_monitoring_springboot_activemq'; 

@NgModule({
    declarations: [
        InugamiView,
        InugamiAsideMenu,
        InugamiApiView,
        InugamiApiToc,
        
        InugamiCommonsView,
        InugamiCommonsToc,

        InugamiCommonsSpringView,
        InugamiCommonsSpringToc,
        
        InugamiCommonsTestView,
        InugamiCommonsTestToc,

        InugamiLogsObfuscatorToc,
        InugamiLogsObfuscatorView,

        InugamiMonitoringApiToc,
        InugamiMonitoringApiView,


        InugamiMonitoringCoreToc,
        InugamiMonitoringCoreView,

        InugamiMonitoringProvidersToc,
        InugamiMonitoringProvidersView,

        InugamiMonitoringSensorsToc,
        InugamiMonitoringSensorsView,

        InugamiMonitoringSpringbootToc,
        InugamiMonitoringSpingbootView,

        InugamiMonitoringSpringbootActivemqToc,
        InugamiMonitoringSpringbootActivemqView



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

        InugamiCommonsView,
        InugamiCommonsToc,
        
        InugamiCommonsSpringView,
        InugamiCommonsSpringToc,

        InugamiCommonsTestView,
        InugamiCommonsTestToc
    ]
})
export class InugamiModule { }
