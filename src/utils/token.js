export const TOKEN_KEY = 'user-token';

export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const setToken = token => localStorage.setItem(TOKEN_KEY, token);

export const removeToken = () => localStorage.removeItem(TOKEN_KEY);
