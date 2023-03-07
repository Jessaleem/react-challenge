export type Character = {
  id: string;
  name: string;
  status: string;
  species: string;
  image: string;
  origin: Origin;
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

export type Origin = {
  name: string;
};

type Resident = {
  id: number;
  name: string;
  image: string;
};
