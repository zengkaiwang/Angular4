import {Injectable} from '@angular/core';
import { HttpHeaders , HttpClient} from '@angular/common/http';

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
}