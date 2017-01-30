Scope
================================

What is scope?
Where the variables live, the rules for accessing them.

What is the Global scope?
The outermost scope

What is local scope?
Function scope

Examples:

Name the scopes and their variables
var foo = 1;

function bar(x){
	var y = 2;
}

var baz;


//should see that y is now part of the global scope
var foo = 1;

function bar(x){
	y = 2;
}

var baz;


//name the scopes
var foo = 1;

function bar(x){
	var y = 2;
	function bat(){
		var z = 3;
	}
}

var baz;


Hoisting 
================================
//should see that w is global scope
var foo = 1;

function bar(x){
	var y = 2;
	function bat(){
		var z = 3;
		w = 4;
	}
}

var baz;

//should see that z is hoisted to the top of bar
var foo = 1;

function bar(x){
	var y = 2;
	function bat(){
		console.log(z); //-- what does this do
		
	}
	var z = 3;
	bat();
}

var baz;
bar();

//should see that z is undefined
var foo = 1;

function bar(x){
	var y = 2;
	function bat(){
		console.log(z); //-- what does this do
		
	}
	bat();
	var z = 3;
	
}

var baz;
bar();


//should understand what happens at compile time and at execution
I.
a = 2;
var a; //moves to the top at compile time
console.log( a );	//2

Which is like:
var a;
a = 2;
console.log(a);

II
//var b added to top at compile time
console.log(b);	//undefined
var b = 2; //→ b = 2

Which is like:
var b;
console.log(b);
b = 2;

III.
//var c added at compile time
console.log(c); //error
c = 2;

Which is like:
console.log(c)


Closures
=========================================
Closure is when a function can remember and access its lexical scope even when it's invoked outside its lexical scope.


//can I say bar()?
function foo(){
	var a = 1;
	function bar(){
		console.log(a);
	}

}

//we should see that baz has access to a
function foo(){
	var a = 1;
	function bar(){
		console.log(a);
	}

	return bar;
} 

var baz = foo();
baz();


//revealing module
function Foo() {
	var a = 1234;

	function bar() {
		console.log(a);
	}

	return {
		bar: bar
	}
}

var foo = Foo();
foo.bar();
