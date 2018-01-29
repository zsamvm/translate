import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { ChatroomPageComponent } from './chatroom-page.component';

@NgModule({
    declarations: [
        ChatroomPageComponent
    ],
    imports: [
        AngularFireModule,
        AngularFireDatabaseModule,
        AngularFirestoreModule,
        AngularFireAuthModule,
        CommonModule,
        FormsModule
    ]
})
export class ChatroomPageModule {}
