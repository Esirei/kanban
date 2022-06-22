export interface Board {
  id: number;
  name: string;
  lists: List[];
}

export interface List {
  id: number;
  name: string;
}
