import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { AppComponent } from "./app.component";
import { MessageComponent } from "./message/message.component";
import { MessageListComponent } from "./message/message-list.component";
import {MessageInputComponent} from "./message/message-input.component";
import { MessagesComponent} from "./message/messages.component";
import { AuthenticationComponent} from "./auth/authentication.component";
import { HeaderComponent} from "./header.component";
import {MGROUTING} from "./app.routing";
import {LogoutComponent} from "./auth/logout.component";
import {SignupComponent} from "./auth/signup.component";
import {SigninComponent} from "./auth/signin.component";

@NgModule({
  declarations: [
    AppComponent
    , MessageComponent
    , MessageListComponent
    , MessageInputComponent
    , MessagesComponent
    , AuthenticationComponent
    , HeaderComponent
    , LogoutComponent
    , SignupComponent
    , SigninComponent
  ],

  imports: [BrowserModule, FormsModule, MGROUTING],

  bootstrap: [AppComponent]
})
export class AppModule {

}
