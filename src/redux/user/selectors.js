export const selectIsLoggedIn = (state) => state.user.isLoggedIn;

export const selectIsRefreshing = (state) => state.user.isRefreshing;

export const selectUser = (state) => state.user.user;

export const selectIsLoading = (state) => state.user.isLoading;

export const selectError = (state) => state.user.error;
