export interface ISet {
  code: string;
  name: string;
  type: string;
  releaseDate: string;
  onlineOnly: boolean;
  block?: string;
  booster?: (string | string[])[];
}

export type SelectedSet = ISet | null;

type ForeignName = {
  name: string;
  type: string;
  flavor: string | null;
  imageUrl: string;
  language: string;
  multiverseid: number;
  text?: string;
};

type Legalities = {
  format: string;
  legality: string;
};

export interface ISetCard {
  id: string;
  name: string;
  manaCost: string;
  cmc: number;
  colors: string[];
  colorIdentity: string[];
  type: string;
  types: string[];
  rarity: string;
  set: string;
  setName: string;
  artist: string;
  number: string;
  layout: string;
  printings: string[];
  legalities?: Legalities[];
  text?: string;
  power?: string;
  imageUrl?: string;
  toughness?: string;
  subtypes?: string[];
  variations?: string[];
  multiverseid?: string;
  originalText?: string;
  originalType?: string;
  foreignNames?: ForeignName[];
}
