import { Component } from '@angular/core';
import {MessageService} from './message/message.service';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styles: ['.author{display: inline-block} .config{display:inline-block} ']
, providers: [MessageService]

})
export class AppComponent {



  // messages = [{
  //   content: "a message",
  //   author: "Me"
  // }, {
  //   content: "a message",
  //     author: "YOu"
  //   }];
}
