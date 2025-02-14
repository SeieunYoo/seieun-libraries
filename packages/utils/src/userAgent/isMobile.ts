import { isServer } from "./isServer";

/**
 * @description 사용자의 유저 에이전트가 모바일인지 확인합니다.
 * @returns {boolean}
 */
export const isMobileUser = () => {
  if (isServer()) {
    return false;
  }
  const mobileRegex = /Android|iPhone|iPad|iPod/i;

  return mobileRegex.test(navigator.userAgent);
};
