<script setup lang="ts">
import AfficheFilm from '@/components/AfficheFilm.vue';
import type { SchemaFilm } from '@/types';
import { supabase } from '@/supabase';
 
console.log(supabase);

let {data : tableaufilm, error} = await supabase
    .from('Films')
    .select('*');
    if (error) console.log("n'a pas pu charger la table Film :", error);
</script>

<template>
    <div class="grid grid-cols-3 gap-4">
        
    </div>
</template>