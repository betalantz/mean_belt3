import { Injectable } from '@angular/core';
import { Http } from '@angular/http'


import "rxjs"
import "rxjs/Rx"
import "rxjs/add/operator/map"


@Injectable()
export class LoginService {

  constructor(private _http: Http) { }

  login(user){
    return this._http.post("/login", user).map(data => data.json()).toPromise()
  }
}
