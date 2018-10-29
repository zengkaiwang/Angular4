import { Component } from '@angular/core';

import './widget/script/string';
import './widget/script/base64.js';
declare var Base64: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  private str: string = "abc"
  ngOnInit() {
  	//测试base64.js
		let base64 = new Base64();
		let password = base64.encode('123456'); //对密码加密
		console.log('password', password);

		//测试String对象上拓展的方法
		let newstr = this.str.padLeft('w',9);
		console.log('newstr', newstr);
  }
}
