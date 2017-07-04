import { RouterModule, Routes } from '@angular/router';
import {SignupComponent} from './signup.component';
import {SigninComponent} from './signin.component';
import {LogoutComponent } from './logout.component';

export const AUTH_ROUTES: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: '', pathMatch: 'full', redirectTo: 'signup' },
  { path: 'signin', component: SigninComponent },
  { path: 'logout', component: LogoutComponent }
];
