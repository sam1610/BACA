import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class DataProvider {
 ApiUrl="../../assets/data/data.json";

  constructor(public http: HttpClient) {
     
  }
getData(){
 return  this.http.get(this.ApiUrl);
}
}
