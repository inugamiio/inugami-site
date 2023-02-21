import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgxGoogleAnalyticsModule,NgxGoogleAnalyticsRouterModule } from 'ngx-google-analytics';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Modules } from './modules/modules';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxGoogleAnalyticsModule.forRoot('G-1683HZCMDJ'),
    NgxGoogleAnalyticsRouterModule,
    Modules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
