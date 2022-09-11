import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-childoutput',
  templateUrl: './childoutput.component.html',
  styleUrls: ['./childoutput.component.css'],
})
export class ChildoutputComponent implements OnInit {
  sendmessage: string = 'this is from child  Hemant';

  @Output() messageEvent = new EventEmitter<string>();
  constructor() {}

  ngOnInit() {}
  sendMessage() {
    this.messageEvent.emit(this.sendmessage);
  }
}
