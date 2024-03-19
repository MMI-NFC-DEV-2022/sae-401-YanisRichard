<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import AfficheMaison from '@/components/AfficheMaison.vue';
import { type SchemaOffreMaison } from '@/type';

const maMaison:SchemaOffreMaison = {
    nomMaison: "Maison",
    prix: 1000,
    adresse: '123 rue',
    nbrChambres: 3,
    nbrSDB: 2 ,
    surface: "30x40m²",
    favori: true,
    image: 'pexels-binyamin-mellish-106399-1.jpg',
};

const maisons = [
    {
    nomMaison: "Maison1",
    prix: 2000,
    adresse: '111 rue',
    nbrChambres: 4,
    nbrSDB: 2 ,
    surface: "20x80m²",
    favori: false,
    image: 'pexels-binyamin-mellish-106399-1.jpg',
    },

    {
    nomMaison: "Maison2",
    prix: 25000,
    adresse: '222 rue',
    nbrChambres: 8,
    nbrSDB: 3 ,
    surface: "30x80m²",
    favori: true,
    image: 'pexels-binyamin-mellish-106399-1.jpg', 
    },

    {
    nomMaison: "Maison3",
    prix: 350000,
    adresse: '333 rue',
    nbrChambres: 10,
    nbrSDB: 4 ,
    surface: "40x80m²",
    favori: true,
    image: 'pexels-binyamin-mellish-106399-1.jpg', 
    },

];

</script>

<template>
    <h1>On passe les valeurs en objet avec v-bind</h1>

    <AfficheMaison v-for="maison of maisons" v-bind="maison" :key="maison.nomMaison"/>
</template>