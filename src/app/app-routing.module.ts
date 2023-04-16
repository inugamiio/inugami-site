import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeView } from './modules/commons/views/home.view';

import { InugamiView } from './modules/inugami/views/inugami.view';
import { InugamiProjectAnalysisView } from './modules/inugami-maven-plugin/views/inugami.project.analysis';
import { InugamiApiView } from './modules/inugami/views/inugami.api.view';
import { InugamiCommonsView} from './modules/inugami/views/inugami_commons/inugami_commons';
import { InugamiCommonsSpringView} from './modules/inugami/views/inugami_commons_spring/inugami_commons_spring';
import { InugamiCommonsTestView } from './modules/inugami/views/inugami_commons_test/inugami_commons_test';
import { InugamiLogsObfuscatorView } from './modules/inugami/views/inugami_logs_obfuscator/inugami_logs_obfuscator';


const routes: Routes = [
  { path: "", component: HomeView },
  { path: "inugami", component: InugamiView},
  { path: "inugami/inugami_api", component: InugamiApiView},
  { path: "inugami/inugami_commons", component: InugamiCommonsView},
  { path: "inugami/inugami_commons_spring", component: InugamiCommonsSpringView},
  { path: "inugami/inugami_commons_test", component: InugamiCommonsTestView},
  { path: "inugami/inugami_logs_obfuscator", component: InugamiLogsObfuscatorView},
  { path: "inugami-project-analysis-maven-plugin", component: InugamiProjectAnalysisView },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
