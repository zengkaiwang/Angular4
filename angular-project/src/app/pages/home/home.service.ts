import {Injectable} from '@angular/core';
import { HttpHeaders , HttpClient， HttpParams} from '@angular/common/http';

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

    this.httpClient.get(`url`, {params}).subscribe((res) => {
      // 成功回调
    }, (err) => {
      // 失败回调
    });        
  }
  //带参数+带请求头的get请求
  test3() {
  	const params = new HttpParams()
    .set('orderBy', 'aaa')
    .set('limitToFirst', "1");

    const headers = new HttpHeaders().set("X-CustomHeader", "wulalalal");

    this.httpClient.get(`url`, {headers: headers, params: params}).subscribe((res) => {
      // 成功回调
    }, (err) => {
      // 失败回调
    });        
  }     


}