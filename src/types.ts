export interface Basket {
  id?: string;
  semelle?: string;
  empeigne?: string;
  pointe?: string;
  oeillet?: string;
  bande?: string;
  languette?: string;
  lacet?: string;
  trimestre?: string;
}

export const colors = {
  "#000000": "Noir",
  "#FFFFFF": "Blanc",
  "#FF0000": "Rouge",
  "#00FF00": "Vert",
  "#0000FF": "Bleu",
  "#FFFF00": "Jaune",
  "#FF00FF": "Magenta",
  "#00FFFF": "Cyan",
  "#C0C0C0": "Gris clair",
  "#808080": "Gris",
  "#800000": "Marron",
  "#808000": "Olive",
};

export const materiaux = [
  {
    value: "http://url/image/cuir",
    label: "Cuir",
  },
  {
    value: "http://url/image/tissu",
    label: "Tissu",
  },
  {
    value: "http://url/image/synthetique",
    label: "Synthétique",
  },
];

export interface SchemaFilm {
  id?: string; 
  nom: string;
  annee_sortie: number;
  duree: string;
  classification: string;
  image_film: string;
  synopsis: string;
}