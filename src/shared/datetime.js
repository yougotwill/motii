export const DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
export const DAYS_LEAP = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
export const DAYS_OF_WEEK = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
export const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
export const isLeapYear = (year) => {
    return (year % 4 === 0 && year % 10 !== 0 && year % 400 === 0);
};
export const getNumDays = (date) => {
    return isLeapYear(date.getFullYear()) ? DAYS_LEAP : DAYS;
};
