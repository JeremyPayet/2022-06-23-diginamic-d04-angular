import { Colleague } from './../../../models/colleague';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

const link = "https://colleagues-app.herokuapp.com/api/v2/colleagues"

@Component({
  selector: 'tc-create-colleague-reactive-forms',
  templateUrl: './create-colleague-reactive-forms.component.html',
  styleUrls: ['./create-colleague-reactive-forms.component.scss']
})
export class CreateColleagueReactiveFormsComponent implements OnInit {

  monForm: FormGroup
  collegue !: Partial<Colleague>;
  constructor(private builder: FormBuilder, private client: HttpClient) {
    this.monForm = builder.group({
      pseudo: ["", [Validators.required, Validators.minLength(1)]],
      nom: ["", [Validators.required, Validators.minLength(2)]],
      prenom: ["", [Validators.required, Validators.minLength(2)]],
      url: ["", [Validators.required, Validators.minLength(1)]]
    })
  }

  ngOnInit(): void {
  }

  valider() {
    /*
    console.log("pseudo", this.monForm.controls['pseudo'].value ,
    "last", this.monForm.controls['nom'].value,
    "first", this.monForm.controls['prenom'].value,
    "photo", this.monForm.controls['url'].value)
    */
    return this.client.post<Partial<Colleague>>(link, {
      "pseudo": this.monForm.controls['pseudo'].value,
      "last": this.monForm.controls['nom'].value,
      "first": this.monForm.controls['prenom'].value,
      "photo": this.monForm.controls['url'].value
    }).subscribe(colleague => {
      this.collegue = colleague
    })

  }

  disableButton() {
    return (
      this.monForm.controls['pseudo'].invalid ||
      this.monForm.controls['nom'].invalid ||
      this.monForm.controls['prenom'].invalid ||
      this.monForm.controls['url'].invalid
    )
  }

}
