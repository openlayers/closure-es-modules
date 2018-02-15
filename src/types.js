/**
 * @module types
 */

/**
 * @typedef {Array<number>} Coordinate
 */

/**
 * @typedef {Object} Attributes
 * @property {string} time Time.
 * @property {module:types.Source} source Source.
 */

/**
 * @enum {number}
 */
export const Source = {
  UNKNOWN: 0,
  GPS: 1,
  MANUAL: 2
};
