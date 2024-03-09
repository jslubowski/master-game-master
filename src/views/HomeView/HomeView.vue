<script setup>
import { useSpotifyStore } from '@/store/modules/spotify';
import SpotifyLoginButton from '@/components/SpotifyLoginButton.vue';
import { computed, onBeforeMount } from 'vue';

const spotifyStore = useSpotifyStore();

onBeforeMount(() => spotifyStore.loadSpotifyTokens());

const isLoggedToSpotify = computed(() => spotifyStore.isLoggedToSpotify);

</script>
<template>
   <SpotifyLoginButton v-if="!isLoggedToSpotify" />
</template>
