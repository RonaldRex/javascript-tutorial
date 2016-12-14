## JavaScript Design Patterns

### Namespace object
Using an object gives structure to your code and it only adds one variable to the global scope.  This is helpful because it prevents duplicating variable names. Create an object literal and add all of your variables and functions as properties of that object.   

```js
var Book = Book || {};
Book.display = function () {...};

or 

var Book = {
	isbn: 1234,
	title: "JS",
	author: "Alberta",
	display: function() {
		return "isbn: " + this.isbn + " title: " + this.title + " author: " + this.author
	}
}
```

### Configuration object
If you have a function that accepts multiple parameters, you can
use one parameter that is an object.  The properties of the object
will be the parameters.  The benefits of using an object as a 
parameter is that parameters can be easily added and the order does
not matter. 

```js
var Book = function(config) {
	var isbn = config.isbn;
	var title = config.title;
	var author = config.author;
}
```

### Self-executing function
Functions can be used to prevent variable collision in the global scope. Wrapping code in a function creates a scope for the containing variables so that they aren't added to the global scope.
And having the function execute itself executes the code inside.

```js
(function Book(){
 	var isbn = 1234;
 	console.log(isbn); 
})();

or you can use an anonymous function

(function(){
 	...
})();
```



