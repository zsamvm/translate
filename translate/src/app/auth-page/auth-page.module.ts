import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthPageComponent } from './auth-page.component';

@NgModule({
    declarations: [
        AuthPageComponent
    ],
    imports: [
        AngularFirestoreModule,
        AngularFireAuthModule,
        CommonModule,
        FormsModule
    ]
})
export class AuthPageModule {}
