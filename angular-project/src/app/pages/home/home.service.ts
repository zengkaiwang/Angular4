import {Injectable} from '@angular/core';
import { HttpHeaders , HttpClient} from '@angular/common/http';

import { BaseService } from '../base-service';

@Injectable()

export class HomeService extends BaseService {
  constructor(
    public httpClient: HttpClient){
    super(httpClient);
  }

  test() {
  	console.log('i am homeService test')
  }
}