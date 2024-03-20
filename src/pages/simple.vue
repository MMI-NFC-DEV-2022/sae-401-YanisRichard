<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import AfficheFilm from '@/components/AfficheFilm.vue';
import { type SchemaFilm } from '@/type';

const monFilm:SchemaFilm = {
    nom: "Alien",
    annee_sortie: 1979,
    duree: "1h57",
    classification:"12 ans et +" ,
    synopsis: "Ce film parle d'un alien qui tue des gens dans l'espace." ,
    image: 'pexels-binyamin-mellish-106399-1.jpg',
};


const films = [
    {
    nom: "Avengers",
    annee_sortie: 2012,
    duree: "1h45",
    classification:"10 ans et +" ,
    synopsis: "Ce film parle d'un groupe de super-héros qui doivent sauver le monde." ,
    image: 'pexels-binyamin-mellish-106399-1.jpg',
    },

    {
    nom: "Fantasia 2000",
    annee_sortie: 2012,
    duree: "1h30",
    classification:"Tous publics" ,
    synopsis: "Ce film parle d'une souris de dessin animé qui va chanter et danser au gré de musiques classiques." ,
    image: 'pexels-binyamin-mellish-106399-1.jpg',
    },

    {
    nom: "Saw",
    annee_sortie: 2004,
    duree: "1h45",
    classification:"16 ans et +" ,
    synopsis: "Ce film parle d'un photographe et d'un médecin piègés dans une salle de bain par un tueur en série." ,
    image: 'pexels-binyamin-mellish-106399-1.jpg',
    },

];

</script>

<template>
    <h1>On passe les valeurs en objet avec v-bind</h1>
    <AfficheFilm v-bind="monFilm"/>
    <AfficheFilm v-for="film of films" v-bind="film" :key="film.nom"/>
</template>