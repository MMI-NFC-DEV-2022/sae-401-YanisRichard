<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { supabase, user } from '../supabase';

async function signInWithGithub() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'github',
  })
}

async function signOut() {
  const { error } = await supabase.auth.signOut()
}

</script>
<template>
<div>
    <button v-if="user" @pointerdown= signOut>
        Se déconnecter ({{user.email}})
    </button>
    <button v-else @pointerdown= signInWithGithub>
        Se connecter avec Github
    </button>
</div>


</template>   