import { Component, Input, EventEmitter, Output  } from '@angular/core';

@Component({
  selector: 'page-child',
  templateUrl: 'child.html',
})


export class ChildPage {

	@Output() changeNumber: EventEmitter<number> = new EventEmitter();

	@Input() content:string;

	Number: number = 0;

  constructor() {
    setInterval(() => {
      this.changeNumber.emit(++this.Number);
    }, 1000)
  }
}