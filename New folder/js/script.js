(function (window) {
	var tameezGreeter = {};
	tameezGreeter.name = "Tameez";
	var greeting = "Hello "
	tameezGreeter.sayHello = function () {
		console.log(greeting + tameezGreeter.name);
	}
	window.tameezGreeter = tameezGreeter;

}) (window);