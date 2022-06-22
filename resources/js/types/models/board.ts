export interface Board {
  id: number;
  name: string;
  lists: List[];
}

export interface List {
  id: number;
  name: string;
  cards: Card[];
}

export interface Card {
  id: number;
  title: string;
  description?: string;
}
