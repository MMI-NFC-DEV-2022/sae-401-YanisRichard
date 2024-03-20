<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { RouterLink } from 'vue-router';

</script>


<template>
    <header>
        <h1>SAE 401 Yanis RICHARD</h1>
        <nav>
            <RouterLink class="mr-20" to="/">Home</RouterLink>
            <RouterLink class="mr-20" to="/about">About</RouterLink> 
            <RouterLink class="mr-20" to="/simple">Simple</RouterLink>
            <RouterLink class="mr-20" to="/film">Films</RouterLink>
            <RouterLink class="mr-20" to="/login">login</RouterLink> 
        </nav>
    </header>
</template>

<style scoped>
/* Ajoutez ici votre style CSS pour le header */
header {
  background-color: #333; /* Changez la couleur ici */
  color: white;
  padding: 20px;
}

h1 {
  margin: 0;
}

nav {
  list-style-type: none;
  padding: 0;
}

nav  {
  display: inline;
  margin-right: 10px;
}

nav ul li:last-child {
  margin-right: 0;
}

nav ul li a {
  color: white;
  text-decoration: none;
}
</style>