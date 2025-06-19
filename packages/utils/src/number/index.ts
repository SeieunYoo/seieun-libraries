/**
 * @description 숫자를 두 자리로 패딩합니다.
 * @param {number} number - 패딩할 숫자
 * @example padWithZero(5) -> "05"
 */
export const padWithZero = (number: number) => {
  return number.toString().padStart(2, "0");
};

/**
 * @description 숫자를 천 단위로 쉼표를 추가하여 포맷합니다.
 * @param {number | string} number - 쉼표를 추가할 숫자
 * @example formatNumberWithCommas(1234567) -> "1,234,567"
 */
export const formatNumberWithCommas = (number: number | string) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
