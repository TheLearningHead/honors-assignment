import { isleapYear } from "./dateUtil.js";

const leapYear = 2004;
const nonLeapYear = 2003;

console.log("Is", leapYear, "a leap year? :", isleapYear(leapYear));
console.log("Is", nonLeapYear, "a leap year?: ", isleapYear(nonLeapYear));