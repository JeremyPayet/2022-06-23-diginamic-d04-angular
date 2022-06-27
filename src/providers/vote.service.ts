import { Injectable } from '@angular/core';
import { LikeHate } from 'src/models/like-hate';
import { Vote } from 'src/models/vote';

@Injectable({
  providedIn: 'root'
})
export class VoteService {

  constructor() { }

  list(): Vote[] {
    // TODO use mock
    return [
      {
        colleague:
        {
          pseudo: "Pseudo1",
          score: 1000,
          photo: "https://images.assetsdelivery.com/compings_v2/tanyadanuta/tanyadanuta1910/tanyadanuta191000003.jpg"
        },
        vote: LikeHate.LIKE
      },
      {
        colleague:
        {
          pseudo: "Pseudo2",
          score: 500,
          photo: "https://images.assetsdelivery.com/compings_v2/tanyadanuta/tanyadanuta1910/tanyadanuta191000003.jpg"
        },
        vote: LikeHate.HATE
      }
    ];;
  }
}
