## JavaScript Design Patterns

## Namespace object
Create an object literal and add all of your variables and 
functions as properties of that object.  Using an object gives structure to your code and it only adds one variable to the global
namespace.  This is helpful because it prevents duplicating
variable names.  

```js
var Book = Book || {};
Book.display = function () {...};

or 

var Book = {
	isbn: 1234,
	title: "JS",
	author: "Alberta",
	display: function() {
		return "isbn: " + this.isbn + " title: " +
      this.title + " author: " + this.author
	}
}
```


