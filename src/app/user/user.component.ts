import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';

@Component({
    templateUrl: './user.component.html'
})
export class UserComponent {
    errorMessage: string;
    pageTitle = 'Log In';

    constructor(private authService: AuthService,
                private router: Router) { }

    login(loginForm: NgForm) {
        if (loginForm && loginForm.valid) {
            let userName = loginForm.form.value.userName;
            let password = loginForm.form.value.password;
            this.authService.login(userName, password);

            if (userName === 'mentor') {
                this.router.navigate(['/mentor']);
            } else if (userName === 'admin') {
                this.router.navigate(['/admin']);
            }  else {
                this.router.navigate(['/welcome']);
            }
        } else {
            this.errorMessage = 'Please enter a user name and password.';
        };
    }
}