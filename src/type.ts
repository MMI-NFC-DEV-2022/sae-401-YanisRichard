const { defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');

export interface SchemaFilm {
    id?: string; 
    nom: string;
    annee_sortie: number;
    duree: string;
    classification: string;
    image_film: string;
    synopsis: string;
  }

export interface SchemaSupport {
  id?: string;
  nom_support: string;
  image_support: string;
  lien_support: string;
}