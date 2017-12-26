/**
 * @license
 * Copyright 2017 VMware, Inc. All rights reserved. VMware Confidential
 */

/**
 * Angular modules
 */
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AuthPageModule } from './auth_page/auth-page.module';

/**
 * NgRx imports
 */
import { NgModule } from '@angular/core';
/**
import { StoreModule, ActionReducerMap, ActionReducer, MetaReducer } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { localStorageSync } from 'ngrx-store-localstorage';
**/

/**
 * Application specific imports
 */
import { environment } from '../environments/environment';

/**
 * Routing modules
 */
import { AppRoutingModule } from './app-routing.module';

let imports: any[] = [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule,

    AuthPageModule
];

export const APP_IMPORTS = [...imports];
