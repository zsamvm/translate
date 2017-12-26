import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'translate-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
    constructor(
        private router: Router
    ) {
    }

    ngOnInit() {
        console.log('before navigate');
        this.router.navigate(['auth']);
    }
}
