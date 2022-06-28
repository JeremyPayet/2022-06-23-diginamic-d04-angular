
import { Vote } from './../../../models/vote';
import { Component, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { VoteService } from 'src/providers/vote.service';
import { HttpClient } from '@angular/common/http';
import { RefreshService } from 'src/providers/refresh.service';
import { filter, Subscription } from 'rxjs';
import { Refresh } from 'src/models/refresh';

@Component({
  selector: 'tc-voting-history',
  templateUrl: './voting-history.component.html',
  styleUrls: ['./voting-history.component.scss']
})
export class VotingHistoryComponent implements OnInit, OnDestroy {

  /*@Input() @Output() vote_list: Vote[] = [
    {
      colleague:
      {
        pseudo: "Pseudo1",
        score: 1000,
        photo: "https://images.assetsdelivery.com/compings_v2/tanyadanuta/tanyadanuta1910/tanyadanuta191000003.jpg"
      },
      vote: LikeHate.LIKE
    },
    {
      colleague:
      {
        pseudo: "Pseudo2",
        score: 500,
        photo: "https://images.assetsdelivery.com/compings_v2/tanyadanuta/tanyadanuta1910/tanyadanuta191000003.jpg"
      },
      vote: LikeHate.HATE
    }
  ];
  */
  //@Input() @Output() vote_list: Vote[] = new VoteService().list() ;
  @Input() @Output() vote_list: Vote[] = [];

  link = "https://colleagues-app.herokuapp.com/api/v2/votes"

  EventSub!: Subscription;

  constructor(private voteservice: VoteService, private refreshEvent: RefreshService) { }
  ngOnDestroy(): void {
    this.EventSub.unsubscribe();
  }

  ngOnInit(): void {
    this.refreshPage()
    this.voteservice.listing(this.link)
      .subscribe(voteServeur => {
        this.vote_list = voteServeur
      })
    this.voteservice.abonner().subscribe((element: Vote) => {
      this.refreshPage()
    })
    this.EventSub = this.refreshEvent.getRefreshEvent()
      .pipe(
        filter(refresh => refresh === Refresh.REFRESH)
      )
      .subscribe(
        () => this.refreshPage()
      )

  }

  addToHistory(/**vote: Vote */): void {
    //this.vote_list.push(vote);
    console.log("Hello")
  }
  delToHistory(pos: number): void {
    //console.log("Coucou");
    this.vote_list.splice(pos, 1)
  }

  refreshPage() {
    this.voteservice.listing(this.link)
      .subscribe(voteServeur => {
        this.vote_list = voteServeur
      })
  }

  /*
    const = setInterval(() => {
      this.addToHistory()
    }, 5000)*/

}
