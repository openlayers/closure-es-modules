/**
 * @module types
 */

/**
 * @typedef {Array<number>}
 */
export let Coordinate;

/**
 * @typedef {{
 *   time: string,
 *   source: module:types.Source
 * }}
 *
 * @property {string} time Time.
 */
export let Attributes;

/**
 * @enum {number}
 */
export const Source = {
  UNKNOWN: 0,
  GPS: 1,
  MANUAL: 2
};
