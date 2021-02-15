import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuccessComponent } from './success/success.component';
import { HomeComponent } from './home/home.component';
import { InboxComponent } from './inbox/inbox.component';
import { LoginComponent } from './login/login.component';
import { ContactsComponent } from './inbox/contacts/contacts.component';
import { SentComponent } from './inbox/sent/sent.component';
import { SpamComponent } from './inbox/spam/spam.component';
import { TrashComponent } from './inbox/trash/trash.component';



const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'success', component: SuccessComponent },
  { path: 'inbox', component: InboxComponent },
  { path: 'login', component: LoginComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'sent', component: SentComponent },
  { path: 'spam', component: SpamComponent },
  { path: 'trash', component: TrashComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: []
})
export class AppRoutingModule { }
