import { Component,Input } from '@angular/core';

@Component({
  selector: 'page-child',
  templateUrl: 'child.html',
})
export class ChildPage {
@Input() content:string;
  constructor() {
  }
}