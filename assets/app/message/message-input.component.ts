import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';
import {MessageService} from './message.service';
import {Message} from './message.model';

@Component({
  selector: 'mg-message-input',
  templateUrl: './message-input.component.html'
  // providers: [MessageService]
})

export class MessageInputComponent {
  constructor(private iMessageService: MessageService) { }

  onSubmit(input: NgForm) {
    // console.log(input);
    const aMessage = new Message(input.value.mContentInput, 'Him');
    this.iMessageService.addMessage(aMessage);
    input.reset();
  }
}
