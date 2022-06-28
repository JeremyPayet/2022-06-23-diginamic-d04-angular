import { ColleagueService } from './../../../providers/colleague.service';
import { Colleague } from './../../../models/colleague';
import { Component, Input, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RefreshService } from 'src/providers/refresh.service';
import { filter, Subscription } from 'rxjs';
import { Refresh } from 'src/models/refresh';

@Component({
  selector: 'tc-colleague-list',
  templateUrl: './colleague-list.component.html',
  styleUrls: ['./colleague-list.component.scss']
})


export class ColleagueListComponent implements OnInit, OnDestroy {

  /*@Input() @Output() colleague_list: Colleague[] = [
    {
      pseudo: "Pseudo1",
      score: 1000,
      photo: "https://images.assetsdelivery.com/compings_v2/tanyadanuta/tanyadanuta1910/tanyadanuta191000003.jpg"
    },
    {
      pseudo: "Pseudo2",
      score: 500,
      photo: "https://images.assetsdelivery.com/compings_v2/tanyadanuta/tanyadanuta1910/tanyadanuta191000003.jpg"
    },
    {
      pseudo: "Pseudo3",
      score: 200,
      photo: "https://images.assetsdelivery.com/compings_v2/tanyadanuta/tanyadanuta1910/tanyadanuta191000065.jpg"
    },
    {
      pseudo: "Pseudo4",
      score: -100,
      photo: "https://images.assetsdelivery.com/compings_v2/tanyadanuta/tanyadanuta1910/tanyadanuta191000065.jpg"
    },
    {
      pseudo: "Pseudo5",
      score: -500,
      photo: "https://images.assetsdelivery.com/compings_v2/tanyadanuta/tanyadanuta1910/tanyadanuta191000065.jpg"
    },
    {
      pseudo: "Pseudo6",
      score: -1000,
      photo: "https://images.assetsdelivery.com/compings_v2/tanyadanuta/tanyadanuta1910/tanyadanuta191000003.jpg"
    }
  ];
  */
  @Input() @Output() colleague_list!: Colleague[];

  link = "https://colleagues-app.herokuapp.com/api/v2/colleagues"

  constructor(private liste: ColleagueService, private client: HttpClient, private refreshEvent: RefreshService) { }

  EventSub!: Subscription;

  ngOnDestroy(): void {
    this.EventSub.unsubscribe();
  }

  ngOnInit(): void {
    this.refresh();
    this.EventSub =  this.refreshEvent.getRefreshEvent()
      .pipe(
        filter(refresh => refresh === Refresh.REFRESH)
      )
      .subscribe(
        () => this.refresh()
      )

  }

  list(URL: string): Colleague[] {
    this.client.get<Colleague[]>(URL)
      .subscribe({
        next: (colleagues: Colleague[]) => {
          // process response
          this.colleague_list = colleagues
          console.log(colleagues)
        }
      });
    return this.colleague_list

  }

  refresh() {
    this.list(this.link)
  }
}
