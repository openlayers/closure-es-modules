/**
 * @module math
 */

/**
 * Add two numbers together.
 * @param {number} a The first number.
 * @param {number} b The second number.
 * @return {number} The sum.
 */
export function add(a, b) {
  return a + b;
}

/**
 * Calculate the distance between two points.
 * @param {!../geom/Point} p1 The first point.
 * @param {!../geom/Point} p2 The second point.
 * @return {number} The sum.
 */
export function dist2d(p1, p2) {
  const a = p1.getCoordinates();
  const b = p2.getCoordinates();
  return Math.sqrt(add(
    Math.pow(b[0] - a[0], 2),
    Math.pow(b[1] - a[1], 2)
  ));
}
