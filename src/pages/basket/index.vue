<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import type { Films } from "@/types";
import Id from "./edit/[id].vue";
import { supabase } from "@/supabase";
console.log("supabase :", supabase);



const { data:lesFilms, error } = await supabase
  .from('Films')
  .select('*') ;

</script>

<template>
  <section>
    <h1 class="text-2xl">Exemples de Films</h1>
    <div class="flex flex-wrap gap-2">
      <div class="w-64">
        <RouterLink
          v-for="uneBasket in lesFilms" v-bind:key="uneBasket.id"
          :to="{
            name: '/basket/edit/[id]',
            params: { id: uneBasket.id },
          }"
        >
          <BasketProfil class="w-64" v-bind="uneBasket"/>
        </RouterLink>
      </div>
    </div>
  </section>
</template>