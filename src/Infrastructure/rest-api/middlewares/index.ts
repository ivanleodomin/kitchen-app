/**
 * from here you import and export the middlewares that
 * are executed at the beginning of the request. They must
 * be exported in the array in the order you want them to
 * be executed.
 */

import json from './express-json';
import morgan from './morgan';

export default [morgan, json];
