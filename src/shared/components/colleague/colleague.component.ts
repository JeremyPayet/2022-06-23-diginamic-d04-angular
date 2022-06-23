import { Colleague } from './../../../models/colleague';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tc-colleague',
  templateUrl: './colleague.component.html',
  styleUrls: ['./colleague.component.scss']
})
export class ColleagueComponent implements OnInit {


  @Input() colleague :Colleague = {
    pseudo: "Pseudo",
    score: "+ 1000",
    photo: "#"
  };

  constructor() { }

  ngOnInit(): void {
  }

}
