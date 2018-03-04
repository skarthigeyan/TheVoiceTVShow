import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MentorComponent } from './mentor.component';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../user/auth-guard.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:'mentor', canActivate: [AuthGuard] ,component: MentorComponent}
    ])
  ],
  declarations: [
    MentorComponent]
})
export class MentorModule { }
