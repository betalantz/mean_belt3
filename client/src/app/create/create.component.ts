import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"

import { User } from './../user'
import { Poll } from './../poll'
import { FormsModule } from '@angular/forms'
import { CreateService } from './create.service'


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  new_poll: Poll
  curr_user: User

  constructor(private _createservice: CreateService, private _router: Router) { }

  ngOnInit() {
    this.new_poll = new Poll
    this.inSession()
  }
  inSession() {
    this._createservice.login_stat()
      .then(user => this.curr_user = user)
      .catch(() => this._router.navigate(["/login"]))
  }
  addPoll() {
    this._createservice.addPoll(this.new_poll)
      .then(() => this._router.navigate(["/list"]))
      .catch(err => console.log('add question error', err))
  }
}
