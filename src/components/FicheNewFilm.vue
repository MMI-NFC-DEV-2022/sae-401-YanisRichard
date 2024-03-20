<script setup lang="ts">
import Bed from "./icones/Bed.vue";
import Bath from "./icones/Bath.vue";
import Size from "./icones/Size.vue";
import Heart from "./icones/Heart.vue";
import AddressRdf from "./AddressRdf.vue";
// import type { SchemaOffreMaison } from "../types";
// defineProps<SchemaOffreMaison>();

defineProps({
  id: String, //TODO type uuid
  /** nom du film */
  nom: String,
  /** année de sortie */
  annee_sortie: Number,
  /** durée du film */
  duree: String,
  /** classification du film */
  image: String,
  /** synopsis du film */
  synopsis: String,
  

});
</script>

<template>
  <figure>
    <img class="h-48 w-full rounded-t-lg object-cover" :src="image" alt="" />
    <figcaption
      class="relative flex flex-col rounded-b-lg border-2 border-t-0 border-indigo-100 px-5 py-7"
    >
      <div
        class="absolute top-7 right-5 grid h-12 w-12 place-items-center rounded-full border-2 border-indigo-100"
      >

      </div>
      <h3 class="text-2xl text-gray-900">{{ nom }}</h3>
      <div class="order-first flex items-center">
        <div class="pr-1 text-2xl font-bold text-indigo-500">${{ annee_sortie }}</div>
        <div>/ months</div>
      </div>
      <hr class="my-4 border-t-2 border-indigo-100" />
      <div class="flex justify-between text-sm text-gray-500">
        <div><Bed class="inline-block pr-1" />{{ duree }}&nbsp;Beds</div>
        <div><Bath class="inline-block pr-1" />{{ synopsis }} Bathrooms</div>
      </div>
    </figcaption>
  </figure>
</template>
