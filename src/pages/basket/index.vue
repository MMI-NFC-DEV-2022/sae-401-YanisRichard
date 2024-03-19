<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import BasketProfil from "@/components/BasketProfil.vue";
import type { Basket } from "@/types";
import Id from "./edit/[id].vue";
import { supabase } from "@/supabase";
console.log("supabase :", supabase);



const { data:lesBaskets, error } = await supabase
  .from('Basket')
  .select('*') ;

</script>

<template>
  <section>
    <h1 class="text-2xl">Exemples de Baskets</h1>
    <div class="flex flex-wrap gap-2">
      <div class="w-64">
        <RouterLink
          v-for="uneBasket in lesBaskets" v-bind:key="uneBasket.id"
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