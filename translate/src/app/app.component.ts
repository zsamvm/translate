import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
    selector: 'translate-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
    constructor(
        private firebaseAuth: AngularFireAuth,
        private router: Router
    ) {
    }

    ngOnInit() {
        this.firebaseAuth.auth.onAuthStateChanged(user => {
            if (user) {
                console.log('changed has user');
                console.log(user);
                console.log('navigate to chatroom page');
                this.router.navigate(['auth']);
                // this.router.navigate(['chatroom']);
            } else {
                console.log('changed but no user');
                console.log('navigate to auth page');
                this.router.navigate(['auth']);
            }
        });
    }
}
