import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { Angulartics2Module } from 'angulartics2';
import { Angulartics2GoogleTagManager } from 'angulartics2/gtm';

import { environment } from '../environments/environment';

import { ALGOLIA_CONFIG, AlgoliaConfig, AlgoliaModule } from './algolia';
import { AuthModule } from './auth';
import { CoreModule } from './core/core.module';
import { FirebaseModule } from './firebase';
import { StateModule } from './state/state.module';
import { TrailsModule } from './trails';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

const algoliaConfig: AlgoliaConfig = {
  appId: environment.algolia.appId,
  searchApiKey: environment.algolia.searchApiKey
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    environment.production ? ServiceWorkerModule.register('/ngsw-worker.js') : [],
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    Angulartics2Module.forRoot([Angulartics2GoogleTagManager]),
    CoreModule.forRoot(),
    AlgoliaModule.forRoot(),
    FirebaseModule.forRoot(),
    StateModule.forRoot(),
    AuthModule.forRoot(),
    TrailsModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    { provide: ALGOLIA_CONFIG, useValue: algoliaConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
