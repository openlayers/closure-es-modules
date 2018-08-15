/** @typedef {Array<number>} Coordinate */

/** @enum {number} */
export const Source = {
  UNKNOWN: 0,
  GPS: 1,
  MANUAL: 2
};

/**
 * @typedef {Object} Attributes
 * @property {string} time Timestamp.
 * @property {Source} source Source of the geometry.
 */
