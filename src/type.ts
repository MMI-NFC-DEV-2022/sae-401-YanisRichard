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
