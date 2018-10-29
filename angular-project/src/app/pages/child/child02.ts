//通过订阅组件间通信
import { Component, Injectable } from '@angular/core'
import { myService } from "../child/myService"
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'page-child02',
    templateUrl: 'child02.html',
})

export class Child02Page {
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