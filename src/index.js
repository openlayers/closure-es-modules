import * as math from './math';
import Point from './geom/Point';

window.goog = {
  exportSymbol: function(p, o, e) {},
  exportProperty: function(o, p, s) {}
};

const lib = window['lib'] = {};
lib['Point'] = Point;
Point.prototype['getCoordinates'] = Point.prototype.getCoordinates;
lib['math'] = math;
math['add'] = math.add;
math['dist2d'] = math.dist2d;
