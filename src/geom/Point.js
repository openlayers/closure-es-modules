/**
 * @module geom/Point
 */

import {Coordinate} from '../types';

/**
 * @typedef {{coordinates: Coordinate}}
 */
export let PointOptions;

/**
 * Point geometry.
 * @constructor
 * @param {PointOptions} options Constructor options.
 * @param {Coordinate} options.coordinates Coordinates.
 */
const Point = function(options) {
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

  /**
   * @type {Coordinate}
   */
  this.coord = coord;
};

/**
 * @return {Coordinate} Coordinates.
 */
Point.prototype.getCoordinates = function() {
  return [this._x, this._y];
};

export default Point;
