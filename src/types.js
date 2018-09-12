/**
 * @typedef {Array<number>} Coordinate
 * A coordinate as [x, y].
 */

/**
 * @typedef {import("./geom/Point.js").default|Array<number>} PointLike
 * A point as {@link geom/Point} or `[lon, lat]` array.
 */

/**
 * Source of the geometry.
 * @enum {number}
 */
export const Source = {
  /** We don't know where the position comes from. */
  UNKNOWN: 0,
  /** Position was obtained through GPS. */
  GPS: 1,
  /** Position was obtained manually. */
  MANUAL: 2
};

/**
 * @typedef {Object} Attributes Attributes of the geometry.
 * @property {string} time Timestamp.
 * @property {Source} source Source of the geometry.
 */
