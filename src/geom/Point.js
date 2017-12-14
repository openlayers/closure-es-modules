/**
 * Point geometry.
 * @constructor
 * @param {../../externs/types.PointOptions} options Constructor options.
 */
export default function Point(options) {
  const coord = options.coordinates;

  /**
   * @private
   * @type {number}
   */
  this._x = coord[0];

  /**
   * @private
   * @type {number}
   */
  this._y = coord[1];
}

/**
 * @return {../types.Coordinate} Coordinates.
 */
Point.prototype.getCoordinates = function() {
  return [this._x, this._y];
};
