(function (window) {	
	var deenGreeter = {};
	deenGreeter.name = "Deen";
	var greeting = "Hi ";
	deenGreeter.sayHi = function () {
		console.log(greeting +deenGreeter.name); 
	} 

	window.deenGreeter = deenGreeter;
}) (window);
