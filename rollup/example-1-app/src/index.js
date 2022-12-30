import a from './a.js'
import b from './b.js'
import c from './c.js' // not used in our code, so it will get "tree shaked out" of our production bundle.

console.log(a + b);
// console.log(a + b + c);
