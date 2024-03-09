import axios from 'axios';

export default {
  async getSpotifyTokens() {
    const backendBaseUri = import.meta.env.VITE_BACKEND_BASE_URL;
    const response = await axios.get(`${backendBaseUri}/spotify/tokens`, {
      params: {
        code: this.callbackCode,
      },
    });

    if (response.status === 200) {
      const tokensData = {
        accessToken: response.data.accessToken,
        refreshToken: response.data.refreshToken,
        expiresIn: response.data.expiresIn,
      };

      const currentDate = new Date();
      const expirationDate = currentDate.setSeconds(
        currentDate.getSeconds() + tokensData.expiresIn,
      );
      this.$patch({
        accessToken: tokensData.accessToken,
        refreshToken: tokensData.refreshToken,
        expirationDate: expirationDate,
      });

      localStorage.setItem('accessToken', tokensData.accessToken);
      localStorage.setItem('refreshToken', tokensData.refreshToken);
      localStorage.setItem('expirationDate', expirationDate);
    }
  },
  async loadSpotifyTokens() {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');
    const expirationDate = localStorage.getItem('expirationDate');

    if (expirationDate && refreshToken && Date.now() >= expirationDate) {
      const backendBaseUri = import.meta.env.VITE_BACKEND_BASE_URL;
      const response = await axios.get(`${backendBaseUri}/spotify/refresh-tokens`, {
        params: {
          refreshToken: this.refreshToken,
        },
      });

      if (response.status === 200) {
        const tokensData = {
          accessToken: response.data.accessToken,
          expiresIn: response.data.expiresIn,
        };

        const currentDate = new Date();
        const newExpirationDate = currentDate.setSeconds(
        currentDate.getSeconds() + tokensData.expiresIn,
        );
        this.$patch({
          accessToken: tokensData.accessToken,
          expirationDate: newExpirationDate,
        });

        localStorage.setItem('accessToken', tokensData.accessToken);
        localStorage.setItem('expirationDate', newExpirationDate);

        return;
      }
    }

    if (accessToken && refreshToken && expirationDate) {
      this.$patch({
        accessToken,
        refreshToken,
        expirationDate,
      });
      return true;
    } else {
      return false;
    }
  },
};
