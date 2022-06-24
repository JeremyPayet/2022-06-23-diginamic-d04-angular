import { LikeHate } from 'src/models/like-hate';
import { Vote } from './../../../models/vote';
import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'tc-voting-history',
  templateUrl: './voting-history.component.html',
  styleUrls: ['./voting-history.component.scss']
})
export class VotingHistoryComponent implements OnInit {

  @Input() @Output() vote_list: Vote[] = [
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

  constructor() { }

  ngOnInit(): void {
  }

  addToHistory(/**vote: Vote */): void {
    //this.vote_list.push(vote);
    console.log("Hello")
  }
  delToHistory(pos: number): void {
    console.log("Coucou");
    this.vote_list.splice(pos, 1)
  }
  /*
    const = setInterval(() => {
      this.addToHistory()
    }, 5000)*/
}
