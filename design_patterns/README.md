## JavaScript Design Patterns

### Namespace object
An object can be used to organzie your code and avoid variable 
collisions. Create an object literal and add all of your variables and functions as properties of that object.  

Example:   

```js
var Book = Book || {};
Book.display = function () {...};

or 

var Book = {
	isbn: 1234,
	title: "Hello JS",
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

Example: 

```js
var Book = function(config) {
	var isbn = config.isbn;
	var title = config.title;
	var author = config.author;
}
```

### Self-executing function
Functions can be used to prevent variable collision in the global namespace. Wrapping code in a function creates a scope for the containing variables so that they aren't added to the global scope.
And having the function execute itself executes the code inside.  

Example:

```js
(function Book(){
 	var isbn = 1234;
 	console.log(isbn); 
})();

//or you can use an anonymous function

(function(){
 	...
})();
```

### Functions as constructors
A function can be designed as a real world object with state and 
behavior. The properites and methods become publically available by
using the `this` keyword. The function is a blueprint for creating new objects. Calling the function using the `new` keyword
constructs a brand new object.

Example: 

```js
//define the Book class
var Book = function (isbn, title, author) {
	this.isbn = isbn;
	this.title = title;
	this.author = author;
	this.display = function () {
		return "isbn: " + this.isbn + " title: " + this.title + " author: " + this.author
	}
}

//create a new Book object
var myBook = new Book(1234, "Hello JS", "Alberta");
```

Alternatively, methods can be added to the object's prototype.
This is a better practice because this way the method is not
created again when a new object is created.  

Example:

```js
Book.prototype.display = function () {
	return "isbn: " + this.isbn + " title: " +
            this.title + " author: " + this.author
} 

or

Book.prototype = {
	display: function () {...},
	checkIsbn: function (isbn) {...}
}
```

### Revealing module
A singleton implemented as a immediately executing function to 
instantiate. This allows us to have private methods
and attributes. Public methods are made available to use by
returning an object.  

Example: 

```js
var Book = (function() { 

  // Private attributes.
   var isbn, title, author;


	return {
	  // Public methods.
	  display: function() {
	   	return "isbn: " + isbn + " title: " +
            title + " author: " + author
     },
	   getIsbn: function() {
	   	return isbn;
	   },
	   setIsbn: function(newIsbn) {
		   isbn = newIsbn;
	   },

	   getTitle: function() {
	   	return title;
	   },
	   setTitle: function(newTitle) {
			title = newTitle || 'No title specified';
	   },

	   getAuthor: function() {
	   	return author;
	   },
	   setAuthor: function(newAuthor) {
	   	author = newAuthor || 'No author specified';
	   }

	}
})();

Book.setIsbn(1234)
Book.setTitle("Hello JS");
Book.setAuthor("Alberta");
console.log(Book.display());
```


