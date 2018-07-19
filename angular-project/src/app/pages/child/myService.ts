// import{Injectable } from '@angular/core';

// @Injectable()

// export class KmyService {

//     i:number = 0;
// }


// import {Component, Injectable, EventEmitter} from '@angular/core';

// @Injectable()

// export class myService {
//     change: EventEmitter<number>;

//     constructor(){
//         this.change = new EventEmitter();
//     }
// }


//通过订阅组件间通信
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()

export class myService {

  private Source=new Subject<any>();

  Status$=this.Source.asObservable();
  
  StatusMission(message: any) {
      this.Source.next(message);
  }
}