/**
 * Generates a random integer number between min and max.
 * @param {number} min - required
 * @param {number} max - required
 * @returns {number} number
 * @throws TypeError if either min or max is NaN
 *
 * @example
 * import seniorINT from "@ssts/int";
 * const randomInteger: number = seniorINT(-100, 100);
 *
 * console.log(randomInteger);
 * // Log example: 74
 */
const seniorINT = (min: number, max: number): number => {
  if (typeof min !== "number") throw new TypeError("min must be a number");
  if (typeof max !== "number") throw new TypeError("max must be a number");

  return Math.floor(Math.random() * (max - min + 1) + min);
};

interface SSTS {
  seniorINT: typeof seniorINT;
}
declare global {
  interface Window {
    ssts: SSTS;
  }
}
if (window != undefined) window.ssts = { seniorINT };

export default seniorINT;
