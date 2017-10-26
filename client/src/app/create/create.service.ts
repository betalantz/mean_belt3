import { Injectable } from '@angular/core';
import { Http } from '@angular/http'

import "rxjs"
import "rxjs/Rx"
import "rxjs/add/operator/map"


@Injectable()
export class CreateService {

  constructor(private _http: Http) { }

  login_stat() {
    return this._http.get("/login_stat").map(data => data.json()).toPromise()
  }
  addPoll(new_poll) {
    return this._http.post('/addPoll', new_poll).map(data => data.json()).toPromise()
  }
}
