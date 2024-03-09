export default {
  isLoggedToSpotify: (state) => state.accessToken && state.refreshToken && state.expirationDate
};
