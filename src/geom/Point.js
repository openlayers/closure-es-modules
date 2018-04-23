/**
 * @module geom/Point
 */

import {Source} from '../types';
import Geometry from './Geometry';
import rbush from 'rbush';

/**
 * @typedef {Object} PointOptions
 * @property {module:types~Coordinate} coordinates Coordinates.
 * @property {module:types~Attributes|undefined} attributes Attributes.
 */

/**
 * @type {?}
 * @private
 */
const tree = rbush(undefined, undefined);

/**
 * Point geometry.
 * @constructor
 * @extends {module:geom/Geometry~Geometry}
 * @param {module:geom/Point~PointOptions} options Constructor options.
 */
const Point = function(options) {
  const coord = options.coordinates;
  Geometry.call(this, coord);

  const attributes = /** @type {module:types~Attributes} */ (Object.assign({}, options.attributes || {}));

  if (attributes.source == undefined) {
    attributes.source = Source.UNKNOWN;
  }

  /**
   * @private
   * @type {module:types~Attributes}
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

Point.prototype = Object.create(Geometry.prototype);
Point.prototype.constructor = Point;

/**
 * @return {module:types~Attributes} Source.
 */
Point.prototype.getAttributes = function() {
  return this._attributes;
};

/**
 * @return {module:types~Coordinate} Coordinates.
 */
Point.prototype.getCoordinates = function() {
  return [this.coord[0], this.coord[1]];
};

export default Point;
