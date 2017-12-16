/**
 * @typedef {{coordinates: ../types.Coordinate}}
 * @property {../types.Coordinate} coordinates Coordinates.
 */
export let PointOptions;


/**
 * Point geometry.
 * @constructor
 * @param {PointOptions} options Constructor options.
 * @param {../types.Coordinate} options.coordinates The point coordinates.
 */
function Point(options) {
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

export default Point;
