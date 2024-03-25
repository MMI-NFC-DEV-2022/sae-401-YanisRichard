<script setup lang="ts">
import { defineProps } from 'vue';
import type { SchemaFilm } from '@/type';

defineProps<SchemaFilm>();

</script>

<template>

<div class="w-[300px] ml-20 mt-10">
  <img class="w-[200px] h-[300px]  " :src="image_film" :alt="nom"/>
  <p class="">{{ nom }}</p>
  <p class>{{ annee_sortie }}</p>
  <p class>{{ duree }}</p>
  <p class>{{ classification }}</p>
  

</div>


</template>