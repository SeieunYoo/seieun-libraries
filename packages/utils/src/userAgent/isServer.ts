/**
 * @description 서버 환경인지 확인합니다.
 * @returns {boolean}
 */
export const isServer = () => {
  return typeof window === "undefined";
};
