import { LikeHate } from './../models/like-hate';
import { Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompteurService {

  private compteur = new Subject<LikeHate>();

  constructor() { }

  onVote(element: LikeHate) {
    this.compteur.next(element)
  }

  abonner(): Observable<LikeHate> {
    return this.compteur.asObservable();
  }
}
