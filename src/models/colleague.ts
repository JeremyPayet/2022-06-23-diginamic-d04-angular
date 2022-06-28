export interface Colleague {
  pseudo: string;
  score: number;
  photo?: string;
}

export interface FullColleague extends Colleague {
  first: string;
  last: string;
}
