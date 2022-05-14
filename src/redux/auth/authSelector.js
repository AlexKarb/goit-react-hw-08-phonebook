const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUserName = state => state.auth.user.name;
const getUserEmail = state => state.auth.user.email;
const getToken = state => state.auth.token;
const getIsRefreshing = state => state.auth.isRefreshing;
const getError = state => state.auth.error;

export const authSelector = {
  getIsLoggedIn,
  getUserName,
  getUserEmail,
  getToken,
  getIsRefreshing,
  getError,
};
