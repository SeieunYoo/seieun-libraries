import { isServer } from "./isServer.js";

export const isMobileUser = () => {
  if (isServer()) {
    return false;
  }
  const mobileRegex = /Android|iPhone|iPad|iPod/i;

  return mobileRegex.test(navigator.userAgent);
};
