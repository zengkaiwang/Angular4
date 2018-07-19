// import { Component, Input, EventEmitter, Output , Inject, forwardRef  } from '@angular/core';

// import{KmyService}from "../child/myService"

// import{ParentPage} from '../parent/parent';

// @Component({
//   selector: 'page-child',
//   templateUrl: 'child.html',
// })



// export class ChildPage {

// 	@Output() changeNumber: EventEmitter<number> = new EventEmitter();

// 	@Input() content:string;

// 	// Number: number = 0;
// 	i:number = 0;

//   constructor( 
//   	@Inject(forwardRef(() => ParentPage)) private app: ParentPage,
//   	public service:KmyService
//   	) {
//     // setInterval(() => {
//     //   this.changeNumber.emit(++this.Number);
//     // }, 1000)
        
//     // setInterval(() => {
//     //     this.app.i++;
//     // }, 1000);

//     // this.app.test();
//   }

//   test2() {
//   	console.log(33333);
//   }
// }

// import { Component,  EventEmitter} from '@angular/core';

// import{myService}from "../child/myService"

// @Component({
//   selector: 'page-child',
//   templateUrl: 'child.html',
// })

// export class ChildPage {

//     i:number = 0;

//     constructor(public service:myService){
//         service.change.subscribe((value:number)=>{
//             this.i = value;
//         })
//     }
    
// }

//通过订阅组件间通信
import { Component, Injectable } from '@angular/core'
import { myService } from "../child/myService"
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'page-child',
    templateUrl: 'child.html',
})

export class ChildPage {
    i:number=0;

    subscription: Subscription;

    constructor(private Service: myService) {
        this.subscription = Service.Status$.subscribe(message => {
            this.i=message;
        });
    }

    ngOnDestroy() {
    	//取消订阅节省资源
      this.subscription.unsubscribe();
    }
}