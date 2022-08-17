import { getLocalStorage } from './localStorage';

export const getTrayId = (id) => {
  return id.length ? id : getLocalStorage('ACTIVE_TRAY_ID');
};
