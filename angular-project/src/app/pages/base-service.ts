import {Injectable} from '@angular/core';
import { HttpHeaders , HttpClient} from '@angular/common/http';

@Injectable()

export class BaseService {
	constructor( public httpClient: HttpClient ) {}

  //下载excel文件方法
  downLoadFile(url:any, data:any, fileName:any) {
    return new Promise((resolve, reject) => {
		    let that = this,
		        options:any = {};
		    this.httpClient.post(url, data, {
		      headers: new HttpHeaders().set('tenant_id', 'sdsdsdsd')
		            .set('access_token', 'sdsdsdsds')
		            .set('user_id', 'sdsdsdssd'),
		            responseType: 'blob',
		            observe:'response'
		    })
		    .subscribe(res => {
		        var reader = new FileReader();
		        reader.readAsText(res.body, 'utf-8');
		        reader.addEventListener("loadend", ()=>{
		          let toJson;
		          try{
		            toJson=JSON.parse(reader.result)
		          }catch(error){
		            let disposition=res.headers.get('content-disposition');
		            let newfileName='';
		            if(disposition){
		              newfileName=decodeURI(disposition.split('=')[1]);
		              fileName=newfileName;
		            }
		            this.downFile(res.body, fileName);
		            resolve();		            
		            return null;
		          }
		          reject(toJson.msg);		          
		        });
		    }, err => {
		        reject(err.msg);
		    })  
    });  
  }
  downFile(blob, fileName) {
    if (window.navigator.msSaveOrOpenBlob) {
        navigator.msSaveBlob(blob, fileName);
    } else {
        var link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = fileName;
        link.click();
        window.URL.revokeObjectURL(link.href);
    }
  }  

}