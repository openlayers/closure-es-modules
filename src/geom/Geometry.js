class Geometry {

  /**
   * Point geometry.
   * @param {import("../types").Coordinate} coordinates Coordinates.
   */
  constructor(coordinates) {
    /**
     * @type {import("../types").Coordinate}
     */
    this.coord = coordinates;
  }

  /**
   * @return {import("../types").Coordinate} Coordinates.
   */
  getCoordinates() {
    return [this.coord[0], this.coord[1]];
  }

}

export default Geometry;
