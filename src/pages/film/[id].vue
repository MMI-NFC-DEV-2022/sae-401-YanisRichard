<script setup>
import { useRoute } from 'vue-router/auto';
import { supabase } from '@/supabase';
import AfficheSingle from '@/components/AfficheSingle.vue';
import { Collection } from 'pocketbase';
const route = useRoute('/film/[id]')

const {data : film, error} = await supabase
    .from('Film')
    .select(`
        *,
        Collection(*)
        `
    )
    .eq('id', route.params.id)
    .single()
    if (error) {
        console.error(error);
    }
    console.log("donnees de film [[id]]", film);

    //recherche des données de collection
    const {data : collection, error2} = await supabase
    .from('Collection')
    .select(`
        *,
        Collection(nom_coffret)
        `
    )
    .eq('id', route.params.id)
    .single()
    if (error2) {
        console.error(error2);
    }
    console.log("donnees de collection", collection);


</script>

<template>
    <h2>Ici in film pour id : {{ route.params.id }}</h2>
    <div v-if="error">
        Erreur : {{ error.message }}
    </div>
    <div v-else>
id : {{ film.id_collection }}
     Data collection :   {{ film.Collection }}

    </div>
</template>
