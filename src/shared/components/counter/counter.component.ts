import { LikeHate } from './../../../models/like-hate';
import { Component, OnInit } from '@angular/core';
import { CompteurService } from 'src/providers/compteur.service';

@Component({
  selector: 'tc-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})

export class CounterComponent implements OnInit {

  constructor(private lk: CompteurService) { }

  like_count: number = 0;
  hate_count: number = 0;

  ngOnInit(): void {
    this.lk.abonner().subscribe((element: LikeHate) => {
      if (element == LikeHate.LIKE) {
        this.like_count = this.like_count + 1
      } else {
        this.hate_count = this.hate_count + 1
      }
    })
  }
}
