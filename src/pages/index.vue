<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import AfficheFilm from '@/components/AfficheFilm.vue';

import { supabase } from '@/supabase';
 
console.log(supabase);

let {data : tableaufilm, error} = await supabase
    .from('Film')
    .select('*');
    if (error) console.log("n'a pas pu charger la table Film :", error);
console.log("les film dans la liste des film (/film) :", tableaufilm);

</script>

<template>
  <section>
    <h1 class="text-2xl">Home</h1>

    <p>Bienvenue dans le home</p>

    <div class="grid grid-cols-3 gap-4">
        <div v-for="film in tableaufilm" :key="film.id">
            <RouterLink :to="{name:'/film/[id]', params: { id:film.id}}">
                <AfficheFilm  v-bind="film" />
            </RouterLink>  
        </div>
    </div>


  </section>
</template>