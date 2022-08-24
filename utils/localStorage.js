export const setLocalStorage = (key, id) => {
  localStorage.setItem(key, id);
};

export const getLocalStorage = (key) => {
  return localStorage.getItem(key);
};

export const clearLocalStorage = () => {
  localStorage.clear();
};
