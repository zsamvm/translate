import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument }
        from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app';
    items: Observable<Array<any>>;
    private itemDoc: AngularFirestoreDocument<any>;
    item: Observable<string>;
    auth = {
        email:'default',
        password: ''
    };
    isUserLoggedIn: boolean = false;

    constructor(
        private angularFirestore: AngularFirestore,
        private firebaseAuth: AngularFireAuth
    ) {
        this.items = angularFirestore.collection('items').valueChanges();
        this.itemDoc = angularFirestore.doc<any>('items/1');
        this.item = this.itemDoc.valueChanges();

        this.firebaseAuth.auth.onAuthStateChanged(user => {
            if (user) {
                console.log('changed has user');
                console.log(user);
                this.isUserLoggedIn = true;
                if (user.emailVerified) {
                    console.log('user verified');
                } else {
                    console.log('user not verified');
                    user.sendEmailVerification();
                }
            } else {
                console.log('changed but no user');
                this.isUserLoggedIn = false;
            }
        });
    }
    update(item: string) {
        this.itemDoc.update(item);
    }

    signUp() {
        this.firebaseAuth.auth.createUserWithEmailAndPassword(
            this.auth.email, this.auth.password)
            .catch(err => {
                console.log('wtf sign up error');
                console.log(err);
            });
    }

    login() {
        this.firebaseAuth.auth.signInWithEmailAndPassword(
            this.auth.email,
            this.auth.password
        )
        .catch(err => {
            console.log('wtf log in error');
            console.log(err);
        });
    }

    signOut() {
        this.firebaseAuth.auth.signOut();
    }

    isLoggedIn() {
        return this.isUserLoggedIn;
    }
}
