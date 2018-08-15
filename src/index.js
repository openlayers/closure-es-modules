import * as math from './math';
import $geom$Point from './geom/Point';

const global = /** @type {Object} */ (window);
global.Point = $geom$Point;
global.math = {};
global.math.add = math.add;
global.math.dist2d = math.dist2d;
