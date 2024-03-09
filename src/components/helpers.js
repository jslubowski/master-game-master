export const generateRandomString = (length) => {
    var text = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
};

export const getSpotifyAuthorizationUrl = () => {
    const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
    const scope = 'playlist-read-private user-library-read';
    const state = generateRandomString(16);
    const redirectUri = `http://localhost:5173/spotify-login`;

    const spotifyAuthorization = new URL('https://accounts.spotify.com/authorize');
    spotifyAuthorization.searchParams.append('client_id', clientId);
    spotifyAuthorization.searchParams.append('scope', scope);
    spotifyAuthorization.searchParams.append('state', state);
    spotifyAuthorization.searchParams.append('redirect_uri', redirectUri);
    spotifyAuthorization.searchParams.append('response_type', 'code');

    return spotifyAuthorization.toString();
};