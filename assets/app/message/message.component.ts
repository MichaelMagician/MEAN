import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Message} from './message.model'

@Component({
  selector: 'mg-message',
  templateUrl: './message.component.html'
})

export class MessageComponent {
  @Input('inputMessage') iMessage;
  @Output() editEvent = new EventEmitter<String>();
  bColor = 'red';

  onMouseEnter() {
    this.bColor = 'green';
  };

  onMouseLeave() {
    this.bColor = 'red';
  }
  ;
  onEdit() {
    console.log("heyhey");
    this.editEvent.emit("Editing");
  };

  //
  // message = {
  //   content: "a message",
  //   author: "Me"
  // }
}
