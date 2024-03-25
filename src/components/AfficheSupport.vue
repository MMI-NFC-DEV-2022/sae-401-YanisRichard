<script setup lang="ts">
import { defineProps } from 'vue';
import type { SchemaSupport } from '@/type';

defineProps<SchemaSupport>();

</script>

<template>

<div class=" ml-20 mt-10">
  <img class="" :src="image_support" :alt="nom_support"/>
  <p class="">{{ nom_support }}</p>
  <p class="">{{ image_support }}</p>
  <p class="">{{ lien_support }}</p>

</div>


</template> 