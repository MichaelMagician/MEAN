import {Message } from './message.model';


export class MessageService {

  private messagesS: Message [] = [];
  // {
  //   content: "a message",
  //   author: "Me"
  // }, {
  //     content: "a message",
  //     author: "You"
  //   };

  addMessage(message: Message) {
    this.messagesS.push(message);
    console.log(this.messagesS);
  }

  getMessages() { return this.messagesS; }

  deleteMessage(message: Message) {
    this.messagesS.splice(this.messagesS.indexOf(message), 1);
  }


}
