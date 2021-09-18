import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { SurveyComponent } from './survey/survey.component';


@NgModule({
  declarations: [
    AppComponent,
    SurveyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent, SurveyComponent]
})
export class AppModule { 
  constructor(private injector: Injector) {
    const el = createCustomElement(SurveyComponent, { injector });
    customElements.define('survey-widget', el);
  }
  ngDoBootstrap() {}
}
