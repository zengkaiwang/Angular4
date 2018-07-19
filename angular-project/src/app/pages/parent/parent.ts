import { Component , ViewChild } from '@angular/core';

// import{ChildPage}from '../child/child';
import{ KmyService }from '../child/myService'

@Component({
  selector: 'page-parent',
  templateUrl: 'parent.html',
})
export class ParentPage {

	// @ViewChild(ChildPage) private child:ChildPage;

  i: number = 0;

  constructor( service:KmyService ) {
    setInterval(() => {
      // this.i++;
      service.i++;
    }, 1000)
    
  }

  // numberIChange(i:number){
  //     this.i = i;
  // }
  
  test() {
  	console.log(1211212);
  }

  ngAfterViewInit() {
      setInterval(()=> {
          // this.child.i++;
      }, 1000)
      // this.child.test2()
  }  
}