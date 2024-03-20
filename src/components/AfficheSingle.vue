<script setup lang="ts">
import { useRoute } from 'vue-router';
import { defineProps } from 'vue';
import { supabase } from '@/supabase';
const route = useRoute('/film/edit/[[id]]')
import type {Database, Tables} from '@/supabase-types'

defineProps <Database["public"]["Tables"]["Film"]["Row"] & 
{Celebrite:Tables<'Celebrite'>[]} & 
{Genre:Tables<'Genre'>[]} & 
{Saga:Tables<'Saga'>[]} & {Variante:Tables<'Variante'>} & {Support:Tables<'Support'>} & {Plateforme:Tables<'Plateforme'>}>()
</script>