import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
 styles:['.author{display: inline-block} .config{display:inline-block} ']
 

})
export class AppComponent {
  message = {
    content: "a message",
    author: 'Meee'
  };
}
