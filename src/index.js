import {add, dist2d} from './math';
import Point from './geom/Point';

console.log(add(40, 2)); // eslint-disable-line

const p1 = new Point({coordinates: [0, 42]});
const p2 = new Point({coordinates: [42, 0]});
console.log(dist2d(p1, p2)); // eslint-disable-line
