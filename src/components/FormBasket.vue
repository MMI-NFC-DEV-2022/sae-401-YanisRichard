<script setup lang="ts">
import { colors, type Basket, materiaux } from '@/types';
import { ref } from 'vue';
import SvgProfil from './BasketProfil.vue';
import SvgDessus from './BasketDessus.vue';
import { useRoute } from 'vue-router/auto'
import { supabase } from "@/supabase";
const route = useRoute('/basket/edit/[[id]]')

const props = defineProps<{
  data?: Basket;
  id?: string;
}>();

const chaussure = ref<Basket>(props.data ?? {});

async function upsertBasket(dataForm, node) {
    console.log({dataForm});
    
    console.log("OK ici pq ?");
    const { data, error } = await supabase.from("Basket").upsert(dataForm).select('id').single();
    console.log("jamais ici pq ?");
    
    console.log({data, error});
    
    if (error) node.setErrors([error.message])
    else {
         console.log("data : ", data)
    }
}

if (props.id !== undefined) {
    console.log(props.id);
    if (route.params.id) {
    // On charge les données de la basket
        let { data, error } = await supabase
                                        .from("Basket")
                                        .select("*")
                                        .eq("id", route.params.id);
        if (error) console.log("n'a pas pu charger la table Basket :", error);
        else chaussure.value = (data as any[])[0];
    }
}

</script>

<template>
    <div class="p-2">
        <ul class="flex gap-10">
            <li><a href="#profil">Profil</a></li>
            <li><a href="#dessus">Dessus</a></li>
        </ul>
    </div>
    <div class="carousel w-64">
        <SvgProfil class="carousel-item w-64" v-bind="chaussure" id="profil" />
        <SvgDessus class="carousel-item w-64" v-bind="chaussure" id="dessus" />        
    </div>

    <FormKit
         type="form"
          v-model="chaussure" 
           @submit="upsertBasket"
    >
        <FormKit name="semelle" 
                 label="semelle" 
                 value="#FFFFFF" 
                 type="radio" 
                 :options="colors"
                 :sections-schema="{
                    inner: {$el: null},
                    decorator: {$el: null},
                 }"
                 input-class="peer sr-only"
                 options-class="flex gap-1"
                 >
            <template #label="context">
                <div
                    class="h-6 w-6 rounded-full border-2 peer-checked:border-red-600"
                    :style="{ backgroundColor: context.option.value}"
                    />
                    <span class="sr-only">{{ context.option.label }}</span>
            </template>
        </FormKit>
        
        <FormKit name="empeigne" 
                 label="empeigne" 
                 value="#FFFFFF" 
                 type="radio" 
                 :options="colors"
                 :sections-schema="{
                    inner: {$el: null},
                    decorator: {$el: null},
                 }"
                 input-class="peer sr-only"
                 options-class="flex gap-1"
                 >
            <template #label="context">
                <div
                    class="h-6 w-6 rounded-full border-2 peer-checked:border-red-600"
                    :style="{ backgroundColor: context.option.value}"
                    />
                    <span class="sr-only">{{ context.option.label }}</span>
            </template>
        </FormKit>

        <FormKit name="pointe" 
                 label="pointe" 
                 value="#FFFFFF" 
                 type="radio" 
                 :options="colors"
                 :sections-schema="{
                    inner: {$el: null},
                    decorator: {$el: null},
                 }"
                 input-class="peer sr-only"
                 options-class="flex gap-1"
                 >
            <template #label="context">
                <div
                    class="h-6 w-6 rounded-full border-2 peer-checked:border-red-600"
                    :style="{ backgroundColor: context.option.value}"
                    />
                    <span class="sr-only">{{ context.option.label }}</span>
            </template>
        </FormKit>

        <FormKit name="oeillet" 
                 label="oeillet" 
                 value="#FFFFFF" 
                 type="radio" 
                 :options="colors"
                 :sections-schema="{
                    inner: {$el: null},
                    decorator: {$el: null},
                 }"
                 input-class="peer sr-only"
                 options-class="flex gap-1"
                 >
            <template #label="context">
                <div
                    class="h-6 w-6 rounded-full border-2 peer-checked:border-red-600"
                    :style="{ backgroundColor: context.option.value}"
                    />
                    <span class="sr-only">{{ context.option.label }}</span>
            </template>
        </FormKit>
        <FormKit name="bande" label="bande" value="#FFFFFF" type="radio" 
                 :options="colors"
                 :sections-schema="{
                    inner: {$el: null},
                    decorator: {$el: null},
                 }"
                 input-class="peer sr-only"
                 options-class="flex gap-1"
                 >
            <template #label="context">
                <div
                    class="h-6 w-6 rounded-full border-2 peer-checked:border-red-600"
                    :style="{ backgroundColor: context.option.value}"
                    />
                    <span class="sr-only">{{ context.option.label }}</span>
            </template>
        </FormKit>
        <FormKit name="languette" label="languette" value="#FFFFFF" type="radio" 
                 :options="colors"
                 :sections-schema="{
                    inner: {$el: null},
                    decorator: {$el: null},
                 }"
                 input-class="peer sr-only"
                 options-class="flex gap-1"
                 >
            <template #label="context">
                <div
                    class="h-6 w-6 rounded-full border-2 peer-checked:border-red-600"
                    :style="{ backgroundColor: context.option.value}"
                    />
                    <span class="sr-only">{{ context.option.label }}</span>
            </template>
        </FormKit>

        <FormKit name="lacet" label="lacet" value="#FFFFFF" type="radio" 
                 :options="colors"
                 :sections-schema="{
                    inner: {$el: null},
                    decorator: {$el: null},
                 }"
                 input-class="peer sr-only"
                 options-class="flex gap-1"
                 >
            <template #label="context">
                <div
                    class="h-6 w-6 rounded-full border-2 peer-checked:border-red-600"
                    :style="{ backgroundColor: context.option.value}"
                    />
                    <span class="sr-only">{{ context.option.label }}</span>
            </template>
        </FormKit>

        <FormKit name="trimestre" label="trimestre" value="#FFFFFF" type="radio" 
                 :options="colors"
                 :sections-schema="{
                    inner: {$el: null},
                    decorator: {$el: null},
                 }"
                 input-class="peer sr-only"
                 options-class="flex gap-1"
                 >
            <template #label="context">
                <div
                    class="h-6 w-6 rounded-full border-2 peer-checked:border-red-600"
                    :style="{ backgroundColor: context.option.value}"
                    />
                    <span class="sr-only">{{ context.option.label }}</span>
            </template>
        </FormKit>
        <FormKit
        name="materiau"
        label="materiau"
        value="Cuir"
        type="select"
        :options="materiaux"
        >
        </FormKit>
 
        </FormKit>

      

</template>