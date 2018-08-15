import {Source} from '../types';
import Geometry from './Geometry';
import rbush from 'rbush';

/**
 * @typedef {{attributes: import("../types").Attributes, coordinates: import("../types").Coordinate}} PointOptions
 */

/**
 * @type {*}
 * @private
 */
const tree = rbush();

class Point extends Geometry {

  /**
   * Point geometry.
   * @param {Object} options
   * @param {import("../types").Coordinate} options.coordinates Coordinates of the point.
   * @param {import("../types").Attributes} options.attributes Attributes describing the point.
   */
  constructor({coordinates, attributes}) {
    super(coordinates);

    /** @type {import("../types").Attributes} */
    attributes = attributes || /** @type {import("../types").Attributes} */ ({});

    if (attributes.source == undefined) {
      attributes.source = Source.UNKNOWN;
    }

    /**
     * @private
     * @type {import("../types").Attributes}
     */
    this._attributes = attributes;

    /**
     * @private
     * @type {number}
     */
    this._x = coordinates[0];

    /**
     * @private
     * @type {number}
     */
    this._y = coordinates[1];

    tree.insert({
      minX: this._x,
      maxX: this._y,
      minY: this._x,
      maxY: this._y,
      attributes: attributes
    });
  }

  /**
   * @return {import("../types").Source} Source.
   */
  getSource() {
    return this._attributes.source;
  }

  /**
   * @return {import("../types").Attributes} Attributes.
   */
  getAttributes() {
    return this._attributes;
  }

  /**
   * @return {import("../types").Coordinate} Coordinates.
   */
  getCoordinates() {
    return this.coord;
  }

}

export default Point;
