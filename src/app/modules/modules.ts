import { CommonModule } from '@angular/common';  

import { NgModule } from '@angular/core';
import { CommonsModule } from './commons/commons.module';
import { InugamiModule } from './inugami/inugami.module';
import { InugamiMavenPluginModule } from './inugami-maven-plugin/inugami.maven.plugin.module';


@NgModule({
    declarations: [
        
    ],
    imports: [
        CommonsModule,
        InugamiModule,
        InugamiMavenPluginModule
    ],
    exports: [
        CommonsModule,
        InugamiModule,
        InugamiMavenPluginModule
    ],
    providers: [
       
    ]
})
export class Modules { }
