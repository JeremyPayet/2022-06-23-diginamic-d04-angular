import { Vote } from './../../../models/vote';
import { ColleagueService } from './../../../providers/colleague.service';
import { VoteService } from 'src/providers/vote.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CompteurService } from 'src/providers/compteur.service';
import { LikeHate } from 'src/models/like-hate';
import { Colleague } from 'src/models/colleague';

@Component({
  selector: 'tc-like-hate',
  templateUrl: './like-hate.component.html',
  styleUrls: ['./like-hate.component.scss']
})
export class LikeHateComponent implements OnInit {

  @Input() disabledL?: boolean;
  @Input() disabledH?: boolean;

  @Output() change: EventEmitter<LikeHate> = new EventEmitter<LikeHate>();

  vote!: Vote;

  constructor(private compteur: CompteurService, private colleague: ColleagueService, private votechange: VoteService) { }

  ngOnInit(): void {
  }

  like() {
    this.change.emit(LikeHate.LIKE);
    this.compteur.onVote(LikeHate.LIKE);
  }
  hate() {
    this.change.emit(LikeHate.HATE);
    this.compteur.onVote(LikeHate.HATE);
  }
}
