import { Component, OnInit } from '@angular/core';

import { HomeService } from './home.service';

import "../../widget/script/video.js";
declare var videofun: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
  	private homeService: HomeService) {

  }

  ngOnInit() {
  	let that = this;
  	// console.log(that.homeService.downFile);
  	// that.homeService.test1();
  	// that.homeService.test2();
  	// that.homeService.test3();
  	// that.homeService.httpPostExample();
  	// that.homeService.httpPostExample2();
    let ff = new videofun()
    console.log('videofun', ff.showVideo)
    ff.showVideo('10.192.19.124','admin','sany3188')
  }

}
