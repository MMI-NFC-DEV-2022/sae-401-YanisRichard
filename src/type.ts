export interface SchemaOffreMaison {
    id?: string; 
    nomMaison: string;
    prix: number;
    favori: boolean;
    image: string;
    nbrChambres: number;
    nbrSDB: number;
    adresse: string;
    surface: string;
  }

export interface SchemaQuartier [
  id?: string;
  nom_quartier: string; 
]
  