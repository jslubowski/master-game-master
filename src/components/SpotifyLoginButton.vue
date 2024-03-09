<script setup>
import { getSpotifyAuthorizationUrl } from './helpers';

const spotifyAuthorizationUrl = getSpotifyAuthorizationUrl();

</script>

<template>
    <button class="spotify-login-button">
        <a :href="spotifyAuthorizationUrl">
            <div class="text-container">
                <span>LOG IN TO </span><img src="@/assets/spotify/Spotify_Logo_RGB_Green.png" />
            </div>
        </a>
    </button>
</template>

<style scoped>
.spotify-login-button {
    background: #191414;
    /*TODO move to scss variable */
    color: white;
    width: 20rem;
    height: 3.5rem;
    border-radius: 50px;
    font-size: 1rem;
    font-weight: bold;
}

.spotify-login-button:hover {
    box-shadow: 0px 0px 2px 2px rgba(19, 14, 14, 0.3);
    transition: box-shadow 0.3s ease-in-out;
}

.text-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    img {
        max-height: 2rem;
    }
}

a {
    color: #FFFFFF;
    text-decoration: none;
}
</style>