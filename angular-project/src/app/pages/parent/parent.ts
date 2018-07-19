import { Component } from '@angular/core';

@Component({
  selector: 'page-parent',
  templateUrl: 'parent.html',
})
export class ParentPage {

  i: number = 0;

  constructor() {
    // setInterval(() => {
    //   this.i++;
    // }, 1000)
  }

  // numberIChange(i:number){
  //     this.i = i;
  // }
  
  test() {
  	console.log(1211212);
  }
}