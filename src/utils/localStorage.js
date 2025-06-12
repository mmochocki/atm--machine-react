const STORAGE_KEYS = {
  BALANCE: 'atmBalance'
};

export const getStoredBalance = () => {
  const savedBalance = localStorage.getItem(STORAGE_KEYS.BALANCE);
  return savedBalance ? parseFloat(savedBalance) : 1000;
};

export const setStoredBalance = (balance) => {
  localStorage.setItem(STORAGE_KEYS.BALANCE, balance.toString());
  return balance;
};