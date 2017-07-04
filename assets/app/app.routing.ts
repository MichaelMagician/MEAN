
import {Routes, RouterModule} from "@angular/router";
import {MessagesComponent} from './message/messages.component';
import {AuthenticationComponent} from './auth/authentication.component';
import {AUTH_ROUTES} from './auth/auth.routing';


const APP_ROUTES: Routes = [
  { path: '', redirectTo: "/messages", pathMatch: 'full' },
  { path: 'messages', component: MessagesComponent },
  { path: 'authentication', component: AuthenticationComponent, children: AUTH_ROUTES }
]

export const MGROUTING = RouterModule.forRoot(APP_ROUTES);
