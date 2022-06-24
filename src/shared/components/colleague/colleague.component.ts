import { LikeHateComponent } from './../like-hate/like-hate.component';
import { LikeHate } from './../../../models/like-hate';
import { Colleague } from './../../../models/colleague';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

  changeValue(val: LikeHate): void {
    if (val == LikeHate.LIKE) {
      this.colleague.score = this.colleague.score + 1;
    } else {
      this.colleague.score = this.colleague.score - 1;
    }
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
}
