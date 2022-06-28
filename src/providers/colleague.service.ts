import { Injectable, Output } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Colleague } from 'src/models/colleague';
import { HttpClient, HttpResponse } from '@angular/common/http';

const link = "https://colleagues-app.herokuapp.com/api/v2/colleagues"
@Injectable({
  providedIn: 'root'
})
export class ColleagueService {


  constructor(private client: HttpClient) { }

  /*list(): Colleague[] {
    // TODO use mock
   return [
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
  }
  */
}
