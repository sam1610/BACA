import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";



@Injectable()
export class DataProvider {
public    ApiURL="./assets/Data/events.json";

  constructor(public http: HttpClient) {
    console.log('Hello DataProvider Provider');
  }
getData(){
return this.http.get(this.ApiURL).pipe(map(
  data=> data["Events"]
))


}
}
