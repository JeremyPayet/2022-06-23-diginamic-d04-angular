import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CompteurService } from 'src/services/compteur.service';
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

  constructor(private service: CompteurService) { }

  ngOnInit(): void {
  }

  like() {
    this.change.emit(LikeHate.LIKE);
    this.service.onVote(LikeHate.LIKE);
  }
  hate() {
    this.change.emit(LikeHate.HATE);
    this.service.onVote(LikeHate.HATE);
  }

}
