import { Component } from '@angular/core';

import './widget/script/string';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  private str: string = 'abc'

  ngOnInit() {
  	let newStr =  this.str.padLeft('w', 9)
  	console.log('newStr', newStr);
  }
}
