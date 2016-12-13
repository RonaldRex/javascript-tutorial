## JavaScript Design Patterns

## Namespace object
Using an object gives structure to your code and it only
adds one variable to the global namespace.  This prevents
variable collision.

```js
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

