import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SuccessComponent } from './success/success.component';
import { UppercasePipe } from './uppercase.pipe';
import { InboxComponent } from './inbox/inbox.component';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ArchivedComponent } from './inbox/archived/archived.component';
import { SentComponent } from './inbox/sent/sent.component';
import { SpamComponent } from './inbox/spam/spam.component';
import { TrashComponent } from './inbox/trash/trash.component';



const appRoutes: Routes = [
  { path: 'success', component: SuccessComponent },
  { path: '', component: HomeComponent },
  { path: 'inbox', component: InboxComponent },
  { path: 'login', component: LoginComponent },
  { path: 'archived', component: ArchivedComponent },
  { path: 'sent', component: SentComponent },
  { path: 'spam', component: SpamComponent },
  { path: 'trash', component: TrashComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SuccessComponent,
    UppercasePipe,
    LoginComponent,
    InboxComponent,
    ArchivedComponent,
    SentComponent,
    SpamComponent,
    TrashComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

