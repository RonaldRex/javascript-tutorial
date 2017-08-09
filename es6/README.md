Table of Contents
---------------------------
- [getting started](#getting-started)
- [let](#let)
- [const](#const)
- [spread operator](#spread-operator)
- [default parameters](#default-parameters)
- [destructuring](#destructuring)
- [template literals](#template-literals)
- [arrow functions](#arrow-functions)
- [for-of loop](#for-of-loop)
- [symbols](#symbols)
- [arrays](#arrays)
- [modules](#modules)

### Getting started

Transpiling - compiling source code to source code
Source map - file that maps the lines of the source code to its transpiled output

Dependencies:
- Transpiler - Babel, Traceur
- Package manager - NPM, Bower
- Module loader - Webpack, Browserify

Steps
- Install the babel-cli to execute files written in ES6 in Node
- Install babel-preset-es2015-node5 so that babel can transpile from ES6 to ES5. A preset is a set of plugins that support various compilation scenarios
- Add the following to package.json. Tells babel to use the preset for transpilation.

```
"babel": {
    "presets": [
      "es2015-node5"
    ]
  }
```

Alternatively configuration data could be put in a `.bablerc` file:

```
{
  "presets": [
    "es2015"
  ]
}
```

Using an ES6 REPL:

```bash
$ babel-node 
```

Run a node script written in ES6:

```bash
$ babel-node ./path/to/file.js
```

Transpiling a file:

```bash
$ babel-node ./path/to/file.js --out-file ./path/to/outfile.js
```

Example test:

```js
import assert from 'assert';
import { Point } from '../src/point';

describe('Point', () => {
	it('Instance properties', () => { 
    let p = new Point(1, 5);
    assert.strictEqual(p.x, 1);
    assert.strictEqual(p.y, 5);
	});
});
``

To test install babel-register and mocha.  Test command:

```bash
$ mocha --compilers js:babel-core/register
```

### `let` 

Block scope declarations.  Are not initialized until they are used in the block. No hoisting.

```js
{
  let a = 3;
}
```

In a for loop let redeclares the variable at each iteration

```js
var funcs = [];
for (let i = 0; i < 5; i++) {
  funcs.push( function(){
    console.log( i );
  } );
}
funcs[3]();	
```

### `const` 

A block scope declaration that is readonly. The variable can only be assigned once. Objects and arrays can still be modified because they are assigned by reference.

```js

{
const a = [1,2,3];
	a.push( 4 );
	console.log( a );		// [1,2,3,4]

	a = 42;				// TypeError!
}
```

### Spread operator 

Expands the values in an iterable or collect the rest of the parameters into an array.

```js
let str = [..."hello"];
console.log(str);	//[ 'h', 'e', 'l', 'l', 'o' ]
```

Rest arguments:

```js
function foo(...args) {
	console.log( args );
}

foo( 1, 2, 3, 4, 5);	//displays [1, 2, 3, 4, 5]		

```

### Default parameters

```js
function greet (name="world") {
  console.log("Hello, " + name);
}

greet();		//displays Hello World

```


### Destructuring

Allows us to extract the values from arrays and objects and assign them to variables.


```js
var [ a, b, c ] =  [1,2,3];
var { x, y = 9, z: z } = { x: 4, y: 5, z: 6 };

console.log( a, b, c );				// 1 2 3
console.log( x, y, z );				// 4 5 6
```

### Template literals

```js
let name = "World";
let greeting = `Hello, ${name}`;
console.log(greeting);		//Hello, World	
```

Multiline strings:

```js
`
<div>
	<h1>Hello, World</h1>
</div>
`
```

### Arrow functions

Arrow functions have a lexical `this` and lexical arguments `=>` is a syntactic stand-in for `var self = this` or `.bind(this)`.

```js
var greet = () => console.log(“Hello, World”);
```

A function with one parameter:

```js
var greet = name => console.log(“Hello, ” + name);
```

A function with more than one parameter:

```js
var greet = (fname, lname) => console.log(“Hello, ” + fname + “ “ + name);
```

A function with multiple statements:

```
var greet = (fname, lname) => {
	let name =  fname + “ “ + name;
console.log(“Hello, ” + name);
}
```


### `for-of` loop

Loops over the set of values produced by an iterator. Used in arrays, strings, generators, collections.

Loop over an array:
```js
let arr = [1, 2, 3, 4];
for (let num of arr) {
	console.log(num);
}
// 1 2 3 4
```

Loop over a string:
```js
let str = “Hello”;
for (let char of str) {
	console.log(char);
}
//”h” “e” “l” “l” “o”
```

### Symbols

symbols are basically intended to replace the use of magic strings (arbitrary string values given special meaning) in your application.

### Arrays

- find()
- findIndex()
- entries()
- values()
- keys()

Determine if a string begins with a substring:

```js
“Hello, World”.startsWith(“hello”);	//true
```

Determine if a strings ends with a substring:

```js
"Hello, World".endsWith("World");	//true
```

Determine if a substring is located anywhere in a string:

```js
"Hello, World".includes("World");	//true
```

Repeat a string a specified number of times:
```js
"Hello".repeat(3);	//HelloHelloHello
```

Turn a string into an array with the spread operator (`...`).

```js
let str = [..."hello"];
console.log(str);	//[ 'h', 'e', 'l', 'l', 'o' ]
```


### Modules

Individual properties can be exported like this: 

```js
//bat.js
export function foo() {
	console.log("Hello World");
}

export var bar = 82;

export var baz = [1,2,3];
```

Alternatively, all properties can be exported with one export statement:

```js
//bat.js
function foo() {
	console.log("Hello World");
}

var bar = 82;

var baz = [1,2,3];

export { foo, bar, baz };
```

To use a module's variables you import it into the file.  You can specify what you want to import from the module like this:

```js
import { foo, bar, baz } from "bat";
foo();
```

You can also rename your import:

```js
import { foo as Foo } from "bat";

Foo();
```

Import all of the properties of the module:

```js
import * as foo from "bat";

foo.bat();
bar.bat();
baz.bat();
``` 

Resources
--------------------------
- [ES6 REPL](https://repl.it/languages/babel)
- [ECMAScript specification](http://www.ecma-international.org/ecma-262/6.0/)
- [You Don’t Know JS: ES6 & Beyond](https://github.com/getify/You-Dont-Know-JS/blob/master/es6%20&%20beyond/README.md#you-dont-know-js-es6--beyond)
- [Setting up ES6](https://leanpub.com/setting-up-es6)


