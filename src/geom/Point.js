/**
 * @module geom/Point
 */

import {Source} from '../types';
import rbush from 'rbush';

/**
 * @typedef {{
 *   coordinates: module:types.Coordinate,
 *   attributes: (module:types.Attributes|undefined)
 * }}
 */
export let PointOptions;

/** @type {?} */
const tree = rbush();

/**
 * Point geometry.
 * @constructor
 * @param {PointOptions} options Constructor options.
 * @param {module:types.Coordinate} options.coordinates Coordinates.
 */
const Point = function(options) {
  const coord = options.coordinates;

  const attributes = /** @type {module:types.Attributes} */ (Object.assign({}, options.attributes || {}));

  if (attributes.source == undefined) {
    attributes.source = Source.UNKNOWN;
  }

  /**
   * @private
   * @type {module:types.Attributes}
   */
  this._attributes = attributes;

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
   * @type {module:types.Coordinate}
   */
  this.coord = coord;

  (
    /**
     * @suppress {missingProperties}
     */
    () => {
      tree.insert({
        minX: this._x,
        maxX: this._y,
        minY: this._x,
        maxY: this._y,
        attributes: attributes
      });
    }
  )();
};

/**
 * @return {module:types.Attributes} Source.
 */
Point.prototype.getAttributes = function() {
  return this._attributes;
};

/**
 * @return {module:types.Coordinate} Coordinates.
 */
Point.prototype.getCoordinates = function() {
  return [this.coord[0], this.coord[1]];
};

export default Point;
