import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"

import { Poll } from './../poll'
import { User } from './../user'
import { ListService } from './list.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  polls: Array<Poll>
  curr_user: User

  constructor(private _listservice: ListService, private _router: Router) { }

  ngOnInit() {
    this.inSession()
    this._listservice.get_all() 
    .then(polls => this.polls = polls)
    .catch(err => console.log('get_all error on comp', err))
  }
  inSession() {
    this._listservice.login_stat()
      .then(user => this.curr_user = user)
      .catch(() => this._router.navigate(["/login"]))
  }
  delPoll(_id){
    this._listservice.del_one(_id)
    .then(() => 
      this._listservice.get_all() 
        .then(polls => this.polls = polls)
        .catch(err => console.log('get_all error on comp', err)))
    .catch(err => console.log('delPlayer error on comp', err))
  }
}
