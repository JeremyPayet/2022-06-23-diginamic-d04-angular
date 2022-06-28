import { HttpClient } from '@angular/common/http';
import { Colleague, FullColleague } from './../models/colleague';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { LikeHate } from 'src/models/like-hate';
import { Vote } from 'src/models/vote';

const link = "https://colleagues-app.herokuapp.com/api/v2/votes"
@Injectable({
  providedIn: 'root'
})


export class VoteService {

  private compteur = new Subject<Vote>();

  constructor(private client: HttpClient) { }
  /*
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
  */
  ajouterVote(element: Vote) {
    this.compteur.next(element)
  }

  abonner(): Observable<Vote> {
    return this.compteur.asObservable();
  }

  addVote(collegue: Colleague, vote: LikeHate) {
    const newVote = {
      colleauge: { ...collegue },
      vote: vote
    };

    return this.client.post<FullColleague>(link, {
      "pseudo": collegue.pseudo,
      "like_hate": vote
    }).pipe(
      tap(fullColle => this.compteur.next({
        colleague: fullColle,
        vote,
        score: fullColle.score
      }))
    )
    //this.ajouterVote(newVote)
  }

  listing(URL: string): Observable<Vote[]> {
    return this.client.get<Vote[]>(URL)
  }
}
