import {halfOf , multiply} from './lib.js';
import doSomething from './doSomething.js';
import { flag, touch } from './validator.js';

console.log(halfOf(50));
console.log(multiply(10,5));

doSomething();

console.log(flag);
touch();
console.log(flag);