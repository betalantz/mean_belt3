import { Injectable } from '@angular/core';
import { Http } from '@angular/http'

import "rxjs"
import "rxjs/Rx"
import "rxjs/add/operator/map"


@Injectable()
export class SurveyService {

  constructor(private _http: Http) { }

  get_one(_id){
    return this._http.post('/get_one', {id:_id}).map(data => data.json()).toPromise()
  }
  add_vote(data){
    return this._http.post('/add_vote', {data:data}).map(data => data.json()).toPromise()
  }
  // login_stat() {
  //   return this._http.get("/login_stat").map(data => data.json()).toPromise()
  // }
}
