<script setup lang="ts">
import { useRoute } from 'vue-router';
import { defineProps } from 'vue';
import { supabase } from '@/supabase';
const route = useRoute('/film/edit/[[id]]')
import type {Database, Tables} from '@/supabase-types'

defineProps<Database['public']['Tables']['Film']['Insert'] & {Collection:Tables<'Collection'>} & {Collection:Tables<'Support'>}>();


</script>

<template>

    <div class=" mt-10 flex flex-auto flex-row">
      <div class="ml-20 w-[20%]">
        <img  :src="image_film" :alt="nom"/>
      </div>
      <div class="ml-10 w-[50%]">
        <p class="pt-5">{{ nom }}</p>
        <p class="pt-5">Année de sortie: {{ annee_sortie }}</p>
        <p class="pt-5">Durée du film: {{ duree }}</p>
        <p class="pt-5">Classification Européenne: {{ classification }}</p>
        <p class="pt-5 pb-5">Synopsis:  {{ synopsis }}</p>
      </div>
    </div>

    <div class="flex ml-10" >
        <p class="pt-5 pb-5">Collection: {{ Collection.nom_coffret }}</p>
        <a :href="Collection.lien_coffret" class="pt-5 pb-5 ml-11 text-blue-600">Acheter le coffret</a>
    </div>
    
    </template>