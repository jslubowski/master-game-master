<script setup>
import { useSpotifyStore } from '@/store/modules/spotify';
import { useRoute, useRouter } from 'vue-router';

const spotifyStore = useSpotifyStore();
const route = useRoute();
const router = useRouter();
const code = route.query.code;
spotifyStore.$patch({ callbackCode: code })

spotifyStore.getSpotifyTokens();

router.push('/');
</script>