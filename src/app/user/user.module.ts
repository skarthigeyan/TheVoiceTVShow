import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { UserComponent } from './user.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: 'login', component: UserComponent }
    ])
  ],
  declarations: [
    UserComponent
  ],
  providers: [
    AuthService,
    AuthGuard
  ]
})
export class UserModule { }