import { Component } from '@angular/core';

import './widget/script/string';

import './widget/script/base64.js';
declare var Base64: any;

import { session } from './widget/script/sessionStorage'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  private str: string = 'abc'

  ngOnInit() {
    //测试Date对象上拓展的方法
  	let newStr =  this.str.padLeft('w', 9)
  	console.log('newStr', newStr);

    //测试第三方js文件引入
    let base64 = new Base64();
    let password = base64.encode('123456'); //对密码加密
    console.log('password', password)

    //测试应用ts开发的公共模块
    session.set('keyaaa', "value");
    console.log(session.get('keyaaa'));
  }
}
