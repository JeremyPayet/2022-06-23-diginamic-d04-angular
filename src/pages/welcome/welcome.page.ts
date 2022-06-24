import { Component, OnInit } from '@angular/core';
import { SharedModule } from 'src/shared/shared.module';

@Component({
  selector: 'tc-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss']
})
export class WelcomePage implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
