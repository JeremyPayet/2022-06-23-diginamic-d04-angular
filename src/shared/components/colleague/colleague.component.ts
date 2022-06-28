import { Vote } from 'src/models/vote';
import { VoteService } from 'src/providers/vote.service';
import { ColleagueService } from './../../../providers/colleague.service';
import { LikeHate } from './../../../models/like-hate';
import { Colleague } from './../../../models/colleague';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Component({
  selector: 'tc-colleague',
  templateUrl: './colleague.component.html',
  styleUrls: ['./colleague.component.scss']
})
export class ColleagueComponent implements OnInit {


  @Input() colleague: Colleague = {
    pseudo: "Pseudo",
    score: 1000,
    photo: "https://images.assetsdelivery.com/compings_v2/tanyadanuta/tanyadanuta1910/tanyadanuta191000003.jpg"
  };
  @Output() disabledL?: boolean;
  @Output() disabledH?: boolean;

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  };

  constructor(private voteservice: VoteService, private http: HttpClient) { }

  ngOnInit(): void {
    this.http.post<Vote>(
      // url d'accès au service
      'https://colleagues-app.herokuapp.com/api/v2/votes',
      // corps de la réquête
      { colleague: this.colleague, vote: LikeHate.LIKE },
      // options de la requête HTTP
      this.httpOptions).subscribe(newVote => {
        console.log(newVote.vote)
      });
  }

  changeValue(val: LikeHate): void {
    if (val == LikeHate.LIKE) {
      this.colleague.score = this.colleague.score + 1;
    } else {
      this.colleague.score = this.colleague.score - 1;
    }
    // this.voteservice.ajouterVote({ colleague: { ...this.colleague }, vote: val, score: this.colleague.score })
    this.disableLike();
    this.disableHate();
  }

  disableLike(): boolean {
    if (this.colleague.score >= 1000) {
      return true
    } else {
      return false;
    }
  }
  disableHate(): boolean {
    if (this.colleague.score <= -1000) {
      return true;
    }
    else {
      return false;
    }
  }

  sendVote(val: LikeHate) {
    this.voteservice.addVote(this.colleague, val)
      .subscribe(newColleague => {
        this.colleague.score = newColleague.score
      })
  }
}
