import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"

import { User } from './../user'
import {LoginService} from './login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User
  constructor(private _loginservice: LoginService, private _router: Router) { }

  ngOnInit() {
    this.user = new User
    
  }
  login() {
    this._loginservice.login(this.user)
    .then(() => this._router.navigate(["/list"]))
    .catch(err => console.log("user login error", err))
  }

}
