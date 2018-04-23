/**
 * @module geom/Geometry
 */

/**
 * Point geometry.
 * @constructor
 * @param {module:types~Coordinate} coordinates Coordinates.
 */
const Geometry = function(coordinates) {
  /**
   * @type {module:types~Coordinate}
   */
  this.coord = coordinates;
};

/**
 * @return {module:types~Coordinate} Coordinates.
 */
Geometry.prototype.getCoordinates = function() {
  return [this.coord[0], this.coord[1]];
};

export default Geometry;
