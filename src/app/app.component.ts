import { Component } from '@angular/core';

import { Router, Event, NavigationStart, NavigationEnd, NavigationError, NavigationCancel } from '@angular/router';

import { AuthService } from './user/auth.service';
//import { MessageService } from './messages/message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'The Voice TV Show';


    constructor(private authService: AuthService,
                //private messageService: MessageService,
                private router: Router) {

    }


      logOut(): void {
        this.authService.logout();
        this.router.navigateByUrl('/welcome');
    }
}
