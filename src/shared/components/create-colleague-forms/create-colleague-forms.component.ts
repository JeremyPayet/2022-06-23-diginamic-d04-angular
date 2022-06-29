import { Component, OnInit } from '@angular/core';

class MonModel {
  pseudo: string = "";
  nom: string = "";
  prenom: string = "";
  photo_url: string = "";
}

@Component({
  selector: 'tc-create-colleague-forms',
  templateUrl: './create-colleague-forms.component.html',
  styleUrls: ['./create-colleague-forms.component.scss']
})
export class CreateColleagueFormsComponent implements OnInit {

  monModel = new MonModel();

  constructor() { }

  ngOnInit(): void {
  }

}
