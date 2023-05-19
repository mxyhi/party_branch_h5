export const ACCOUNT_KEY = 'user-account';

export const getAccount = () => localStorage.getItem(ACCOUNT_KEY);

export const setAccount = account => localStorage.setItem(ACCOUNT_KEY, account);

export const removeAccount = () => localStorage.removeItem(ACCOUNT_KEY);
