import {Component, OnInit} from '@angular/core';
import {Message} from './message.model';
import {MessageService} from './message.service';

@Component({
  selector: "mg-message-list",
  templateUrl: "./message-list.component.html"
  // providers: [MessageService]
})

export class MessageListComponent implements OnInit {
  messages: Message[];

  constructor(private iMessageService: MessageService) { }
  ngOnInit() {
    this.messages = this.iMessageService.getMessages();
  }

}
