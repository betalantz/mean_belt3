import { Injectable } from '@angular/core';
import { Http } from '@angular/http'

import "rxjs"
import "rxjs/Rx"
import "rxjs/add/operator/map"


@Injectable()
export class ListService {

  constructor(private _http: Http) { }

  get_all(){
    return this._http.get('/get_all').map(data => data.json()).toPromise()
  }
  login_stat() {
    return this._http.get("/login_stat").map(data => data.json()).toPromise()
  }
  del_one(id){
    console.log('id at service', id);
    return this._http.post('/delPlayer/', {id:id}).map(data => data.json()).toPromise()
  }
}
