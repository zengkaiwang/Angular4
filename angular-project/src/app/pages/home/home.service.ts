import {Injectable} from '@angular/core';
import { HttpHeaders , HttpClient} from '@angular/common/http';
import {HttpParams} from "@angular/common/http";

import { BaseService } from '../base-service';

@Injectable()

export class HomeService extends BaseService {

  constructor(
    public httpClient: HttpClient){
    super(httpClient);
  }

  //get请求
  test1() {
    this.httpClient.get("qwqwqwqw")
        .subscribe(data => console.log(data))
  }
  //带参数的get请求
  test2() {
  	const params = new HttpParams()
    .set('orderBy', 'aaa')
    .set('limitToFirst', "1");

    this.httpClient.get("qwqwqwqw", {params})
        .subscribe(data => console.log(data))
  }  

}