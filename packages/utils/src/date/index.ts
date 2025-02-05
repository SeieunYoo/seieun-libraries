/**
 * @description ISO Date 객체를 한국 시간 기준의 ISOString 형식으로 반환합니다.
 * @param {Date} date - ISO Date 객체
 * @example Sat Aug 31 2024 17:22:00 GMT+0900 (한국 표준시) -> "2024-08-31T17:22:00"
 */

export const formatDateToISOString = (date: Date): string => {
  const offset = new Date().getTimezoneOffset() * 60000;
  const UTCDate = new Date(date.getTime() - offset);

  return UTCDate.toISOString().split(".")[0] || "";
};

/**
 * @description ISO Date 형식의 string 을 hours, minutes, seconds, year, month, day 로 파싱합니다.
 * @param {string} dateString - ISO Date 형식의 string
 * @example parseDate("2021-08-31T00:00:00.000Z") -> { year: 2021, month: 8, day: 31, hours: 0, minutes: 0, seconds: 0 }
 */

export const parseISODate = (dateString: string) => {
  const date = new Date(dateString);

  return {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds(),
  };
};

/**
 * @description 시간 문자열을 hours, minutes, seconds 로 파싱합니다.
 * @param {string} timeString "HH:MM:SS" 형식의 시간 문자열
 * @example parseTime("12:30:00") -> { hours: "12", minutes: "30", seconds: "00" }
 */

export const parseTime = (timeString: string) => {
  const [hours, minutes, seconds] = timeString.split(":");
  return {
    hours,
    minutes,
    seconds,
  };
};
