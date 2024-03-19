<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import type { Basket } from "@/types";
const exemples: Basket[] =[
{
  id:"1",
  semelle: "#FF0000",
  empeigne: "#FFFFFF",
  pointe: "#FFFFFF",
  oeillet: "#FFFFFF",
  bande: "#00FF00",
  languette: "#FFFFFF",
  lacet: "#00FF00",
  trimestre: "#FFFFFF",
},

 {
  id:"2",
  semelle: "#00FF00",
  empeigne: "#F00FFF",
  pointe: "#FF00FF",
  oeillet: "#FFFFFF",
  bande: "#00FF00",
  languette: "#FFFFFF",
  lacet: "#0000FF",
  trimestre: "#0FFFFF",
},
];
</script>

<template>
  <section>
    <h1 class="text-2xl">Exemples de Baskets</h1>
    <div class="flex flex-wrap gap-2">
      <div class="w-64">
        <RouterLink
          v-for="(exemple,i) in exemples" v-bind:key="i"
          :to="{
            name: '/basket/exemple/[data]',
            params: { data: JSON.stringify(exemple) },
          }"
        >
          <BasketProfil class="w-64" v-bind="exemple"/>
        </RouterLink>
      </div>
    </div>
  </section>
</template>