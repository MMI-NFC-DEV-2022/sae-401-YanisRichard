<script setup lang="ts">
import { ref } from "@vue/reactivity";
import AfficheFilm from "@/components/AfficheFilm.vue";
import { FormKit } from "@formkit/vue";
import { supabase } from "@/supabase";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const films = ref ({});
const route = useRoute('/film/edit/[[id]]');

async function upsertFilm(dataForm: any, node: { setErrors: (arg0: any[]) => void; }) {
    const { data, error } = await supabase.from("Films").upsert(dataForm).select("id");
    if (error) node.setErrors([error.message])
    else {
        console.log("data :",data);
        router.push({name:"/film/edit/[[id]]", params:{id: data[0].id}});
    }
}

if (route.params.id) {
    const { data, error } = await supabase.from("Films").select("*").eq("id", route.params.id).single();
    if (error) console.error(error);
    else films.value = data;
}
</script>

<template>
    <Formkit @submit="upsertFilm" type="form" v-model="films">
        <FormKit name="nom" label="Titre du film" />
        <FormKit name="synopsis" label="Description du film" />
        <FormKit name="annee_sortie" type="number" label="Note /10" />
        <FormKit name="img_film" label="Images du film" />
    </Formkit>
</template> 