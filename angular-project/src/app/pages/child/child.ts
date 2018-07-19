import { Component, Input, EventEmitter, Output , Inject, forwardRef  } from '@angular/core';

import{ParentPage} from '../parent/parent';

@Component({
  selector: 'page-child',
  templateUrl: 'child.html',
})



export class ChildPage {

	@Output() changeNumber: EventEmitter<number> = new EventEmitter();

	@Input() content:string;

	Number: number = 0;

  constructor( @Inject(forwardRef(() => ParentPage)) private app: ParentPage ) {
    // setInterval(() => {
    //   this.changeNumber.emit(++this.Number);
    // }, 1000)
        
    setInterval(() => {
        this.app.i++;
    }, 1000);

    this.app.test();
  }
}