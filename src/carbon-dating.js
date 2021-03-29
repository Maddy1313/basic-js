const CustomError = require("../extensions/custom-error");
const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;
module.exports = function dateSample(sampleActivity) {
  const toString = Object.prototype.toString;
  const activity = +sampleActivity;
  if (toString.call(sampleActivity) !== '[object String]' || isNaN(activity) || activity <= 0 || activity > MODERN_ACTIVITY) {
    return false;
  }
  return Math.ceil(Math.log(MODERN_ACTIVITY / activity) * HALF_LIFE_PERIOD / 0.693);
};