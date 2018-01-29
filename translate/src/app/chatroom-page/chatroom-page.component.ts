import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument }
        from 'angularfire2/firestore';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Component({
    selector: 'transalte-app-chatroom-page',
    templateUrl: './chatroom-page.component.html',
    styleUrls: ['./chatroom-page.component.scss']
})
export class ChatroomPageComponent implements OnInit {
    chatInput: string;
    email: string;
    chatMsgsRef;
    chatMsgsObs;

    constructor(
        private angularFirestore: AngularFirestore,
        private firebaseAuth: AngularFireAuth,
        private router: Router,
        firebaseDb: AngularFireDatabase
    ) {
        this.chatInput = 'start up text';
        this.chatMsgsRef  = firebaseDb.list('chatMessages');
        this.chatMsgsObs = this.chatMsgsRef.valueChanges();
    }

    ngOnInit() {
        this.firebaseAuth.auth.onAuthStateChanged(user => {
            if (user) {
                console.log('changed has user');
                console.log(user);
                this.email = user.email;

                this.chatMsgsRef.push('msg here');
            } else {
                console.log('changed but no user');
                console.log('navigate to auth page');
                this.router.navigate(['auth']);
            }
        });
    }

    sendChat() {
        this.chatMsgsRef.push();

    }
}
