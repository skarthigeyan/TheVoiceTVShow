import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { MentorService } from './services/mentor.service';
import { WelcomeComponent } from './welcome/welcome.component';
import { MentorGuardService } from './mentor/mentor-guard.service';
import { MentorModule } from './mentor/mentor.module';
import { AdminModule } from './admin/admin.module';
import { UserModule } from './user/user.module';
import { AuthService } from './user/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule, 
    RouterModule.forRoot([      
      {path:'welcome', component: WelcomeComponent},
      {path:'', redirectTo: 'welcome', pathMatch:'full'},
      {path:'**', redirectTo: 'welcome', pathMatch:'full'}
    ]), MentorModule, AdminModule, UserModule
  ],
  providers: [MentorService, MentorGuardService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
