import { FirstLastValidatorDirective } from './../../validators/first-last-validator.directive';
import { HttpHeaders } from '@angular/common/http';
import { Colleague } from './../../../models/colleague';
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, Output } from '@angular/core';

class MonModel {
  pseudo: string = "";
  nom: string = "";
  prenom: string = "";
  photo_url: string = "";
}
const link = "https://colleagues-app.herokuapp.com/api/v2/colleagues"
@Component({
  selector: 'tc-create-colleague-forms',
  templateUrl: './create-colleague-forms.component.html',
  styleUrls: ['./create-colleague-forms.component.scss'],
  viewProviders: [FirstLastValidatorDirective]
})
export class CreateColleagueFormsComponent implements OnInit {

  monModel = new MonModel();
  collegue!: Partial<Colleague>;

  @Input() @Output() colleague_list!: Colleague[];

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  };

  constructor(private client: HttpClient) {
  }

  ngOnInit(): void {

  }
  valider() {
    return this.client.post<Partial<Colleague>>(link, {
      "pseudo": this.monModel.pseudo,
      "last": this.monModel.nom,
      "first": this.monModel.prenom,
      "photo": this.monModel.photo_url
    }).subscribe(colleague => {
      this.collegue = colleague
    })
  }


}
