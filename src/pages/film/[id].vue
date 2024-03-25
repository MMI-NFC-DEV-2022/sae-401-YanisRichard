<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { useRoute } from 'vue-router/auto';
import { supabase } from '@/supabase';
import AfficheSingle from '@/components/AfficheSingle.vue';

const route = useRoute('/film/[id]')

const {data : film, collection, error} = await supabase
    .from('Film')
    .select(`
        *,
        Collection(*),
        Support(*)
        `
    )
    .eq('id', route.params.id)
    .single()
    if (error) {
        console.error(error);
    }
    console.log("donnees de film [[id]]", film);

 


</script>

<template>
    <!-- <h2>Ici in film pour id : {{ route.params.id }}</h2>
    <div v-if="error">
        Erreur : {{ error.message }}
    </div>


    <div v-else>
        <pre>
            {{ JSON.stringify(film,undefined,2) }}
        </pre>

id : {{ film.id_collection }}
     Data collection :   {{ film.Collection }}
    </div> -->

    <div>
        <AfficheSingle v-bind="film" />
    </div>

</template>
