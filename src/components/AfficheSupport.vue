<script setup lang="ts">
import { defineProps } from 'vue';
import type { SchemaSupport } from '@/type';

defineProps<SchemaSupport>();

</script>

<template>

<div class="w-[300px] ml-20 mt-10">
  <img class="w-[200px] h-[300px]  " :src="image_support" :alt="nom_support"/>
  <p class="">{{ nom_support }}</p>
  <p class="">{{ image_support }}</p>
  <p class="">{{ lien_support }}</p>

</div>


</template> 