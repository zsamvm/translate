/**
 * @license
 * Copyright 2017 VMware, Inc. All rights reserved. VMware Confidential
 */

/**
 * Angular modules
 */
import { NgModule } from '@angular/core';
import { PreloadAllModules, Routes, RouterModule } from '@angular/router';

/**
 * Components import
 */
import { AuthPageComponent } from './auth_page/auth-page.component';

/**
 * @type {(
 *  { path: string; redirectTo: string; pathMatch: string } |
 *  { path: string; loadChildren: string }
 * )[]}
 * List of all the routes (both eagerly as well as lazily loaded) for Sample UI application
 */
export const routes: Routes = [
    {
        path: 'auth',
        component: AuthPageComponent
    }
];

/**
 * @module AppRoutingModule
 * @description
 * This is routing module for the application root module.
 */
@NgModule({
    imports: [RouterModule.forRoot(routes, {
        preloadingStrategy: PreloadAllModules,
        // TOOO: Need to fix this.
        // enableTracing: ('production' === ENV) ? false : true,
        initialNavigation: false
    })],
    exports: [RouterModule]
})
export class AppRoutingModule {}
