
your program is almost certainly comprised of several chunks, only one of which is going to execute now, and the rest of which will execute later.

Things to wait for:
getting data from a server

Mechanism:
ajax requests
callback functions

Any time you wrap a portion of code into a function and specify that it should be executed in response to some event (timer, mouse click, Ajax response, etc.), you are creating a later chunk of your code, and thus introducing asynchrony to your program.

asynchrony matters because of performance 
async coding patterns give you the ability to write more performant code

Event loop
An event loop, by contrast, breaks its work into tasks and executes them in serial, 

### concurency

coordinating ordering interaction to prevent race conditions:
```js
var res = [];

function response(data) {
    if (data.url == "http://some.url.1") {
        res[0] = data;
    }
    else if (data.url == "http://some.url.2") {
        res[1] = data;
    }
}

// ajax(..) is some arbitrary Ajax function given by a library
ajax( "http://some.url.1", response );
ajax( "http://some.url.2", response );
```

The if (a && b) conditional around the baz() call is traditionally called a "gate," because we're not sure what order a and b will arrive, but we wait for both of them to get there before we proceed to open the gate (call baz()).

```js
var a, b;

function foo(x) {
    a = x * 2;
    if (a && b) {
        baz();
    }
}

function bar(y) {
    b = y * 2;
    if (a && b) {
        baz();
    }
}

function baz() {
    console.log( a + b );
}

// ajax(..) is some arbitrary Ajax function given by a library
ajax( "http://some.url.1", foo );
ajax( "http://some.url.2", bar );
```

race/latch   It's characterized by "only the first one wins" behavior. Here, nondeterminism is acceptable, in that you are explicitly saying it's OK for the "race" to the finish line to have only one winner.

```js
var a;

function foo(x) {
    if (a == undefined) {
        a = x * 2;
        baz();
    }
}

function bar(x) {
    if (a == undefined) {
        a = x / 2;
        baz();
    }
}

function baz() {
    console.log( a );
}

// ajax(..) is some arbitrary Ajax function given by a library
ajax( "http://some.url.1", foo );
ajax( "http://some.url.2", bar );
```

The if (a == undefined) conditional allows only the first of foo() or bar() through, and the second (and indeed any subsequent) calls would just be ignored. There's just no virtue in coming in second place!

split callbacks
function success(data) {
    console.log( data );
}

function failure(err) {
    console.error( err );
}

ajax( "http://some.url.1", success, failure );


error first callback design
```js
function response(err,data) {
    // error?
    if (err) {
        console.error( err );
    }
    // otherwise, assume success
    else {
        console.log( data );
    }
}

ajax( "http://some.url.1", response );
```

Problems with callbacks:  lack of sequentiality and lack of trustability

Trust issues with callbacks:
When you pass a callback to a utility foo(..), it might:

Call the callback too early
Call the callback too late (or never)
Call the callback too few or too many times
Fail to pass along any necessary environment/parameters
Swallow any errors/exceptions that may happen


### promises
a placeholder for a future value.  The future value 
can indicate success or failure

Promises are an easily repeatable mechanism for encapsulating and composing future values.

