import {Component} from '@angular/core';


@Component({
  selector: "mg-messages-section",
  template: `
        <div class="container">
          <div class="row">
            <mg-message-input></mg-message-input>
          </div>
          <br />
          <div class="row">
            <mg-message-list></mg-message-list>
          </div>
        </div>`
})


export class MessagesComponent {

}
