import { ColleagueComponent } from './../colleague/colleague.component';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LikeHate } from 'src/models/like-hate';

@Component({
  selector: 'tc-like-hate',
  templateUrl: './like-hate.component.html',
  styleUrls: ['./like-hate.component.scss']
})
export class LikeHateComponent implements OnInit {

  @Input() disabledL?: boolean;
  @Input() disabledH?: boolean;

  @Output() change: EventEmitter<LikeHate> = new EventEmitter<LikeHate>();

  constructor() { }

  ngOnInit(): void {
  }

  like() {
    this.change.emit(LikeHate.LIKE);
  }
  hate() {
    this.change.emit(LikeHate.HATE);
  }
}
