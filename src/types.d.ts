export type Character = {
  id: string;
  name: string;
  status: string;
  species: string;
  image: string;
};

export type Episode = {
  id: number;
  name: string;
  air_date: string;
  episode: string;
};

export type Location = {
  id: number;
  dimension: string;
  name: string;
  type: string;
  residents: Resident[];
};

type Resident = {
  id: number;
  name: string;
  image: string;
};
