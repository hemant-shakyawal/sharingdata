import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  parentMessage = 'message from parent';
  recivemessage: string;
  receiveMessagefromchild($event) {
    this.recivemessage = $event;
  }
}
