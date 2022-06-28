import { Refresh } from './../../models/refresh';
import { Component, OnInit } from '@angular/core';
import { SharedModule } from 'src/shared/shared.module';
import { RefreshService } from 'src/providers/refresh.service';

@Component({
  selector: 'tc-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss']
})
export class WelcomePage implements OnInit {

  constructor(private refreshEvent: RefreshService) { }

  ngOnInit(): void {
  }

  refresh() {
    this.refreshEvent.publish(Refresh.REFRESH)
  }
}
