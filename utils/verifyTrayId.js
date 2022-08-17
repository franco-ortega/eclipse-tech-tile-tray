import { getLocalStorage } from './localStorage';

export const verifyTrayId = (id) => {
  return id.length ? id : getLocalStorage('ACTIVE_TRAY_ID');
};
