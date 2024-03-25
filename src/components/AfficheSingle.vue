<script setup lang="ts">
import { useRoute } from 'vue-router';
import { defineProps } from 'vue';
import { supabase } from '@/supabase';
const route = useRoute('/film/edit/[[id]]')
import type {Database, Tables} from '@/supabase-types'
import type { SchemaFilm } from '@/type'
import type { SchemaSupport } from '@/type'


defineProps<SchemaFilm>();
</script>

<template>

    <div class="w-[300px] ml-20 mt-10 grid-flow-row">
      <img class="w-[200px] h-[300px]  " :src="image_film" :alt="nom"/>
      <p class="pt-5">{{ nom }}</p>
      <p class="pt-5">Année de sortie: {{ annee_sortie }}</p>
      <p class="pt-5">Durée du film: {{ duree }}</p>
      <p class="pt-5">Classification Européenne: {{ classification }}</p>
      <p class="pt-5 pb-5">Synopsis:  {{ synopsis }}</p>

    </div>
    
    
    </template>