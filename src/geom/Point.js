/**
 * Point geometry.
 * @constructor
 * @param {../typedefs.coordinate} coord Coordinates.
 */
export default function Point(coord) {

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
 * @return {../typedefs.coordinate} Coordinates.
 */
Point.prototype.getCoordinates = function() {
  return [this._x, this._y];
};
