import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { SurveyService } from './survey.service'

import { User } from './../user'
import { Poll } from './../poll'

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {
  poll: Poll
  poll_id
  option_id

  constructor(private _surveyservice: SurveyService, private _route: ActivatedRoute) {
    this._route.paramMap.subscribe( params => {
      this.poll_id = params.get('id')
      console.log("here's the passed id:", params.get('id'));
    })
   }
  
  ngOnInit() {
    this._surveyservice.get_one(this.poll_id) 
      .then(poll => this.poll = poll)
      .catch(err => console.log('get_one error on comp', err))
  }
  addVote(id){
    
    let data = {
      poll_id: this.poll_id,
      option_id: id
    }
    this._surveyservice.add_vote(data)
      .then(() =>
        this._surveyservice.get_one(this.poll_id) 
          .then(poll => this.poll = poll)
          .catch(err => console.log('get_one error on comp', err)))
      .catch(err => console.log('add_vote error on comp', err))
  }
}
