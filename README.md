DataLoader
==========

Author: Nathan Reid  
License: MIT License  
Description:  
This is a simple library to run several functions and perform a callback once they are complete.

Example use case:
Make 2 AJAX calls to the server to load data and wait for document ready to complete before displaying the data.

Example code:
```javascript
// Create a new DataLoader object:
var dataLoader = new DataLoader(displayData);
dataLoader.data = {};
// Register our 2 functions plus an empty one for the $.ready:
dataLoader.register(function1);
dataLoader.register(function2);
dataLoader.register();
// Run all of the functions
dataLoader.run();

$.ready(function(){
	dataLoader.functionCompleted();
});

function displayData() {
	// do stuff with the data stored in dataLoader.data
	console.log('All data loaded!');
}

function function1(){
	// Make an AJAX call
	$.getJSON('/SomePath1', function(response){
		// Store the response from the server
		dataLoader.data.function1Response = response;
		// Mark this function as complete
		dataLoader.functionCompleted();
	});
}

function function2(){
	// Make an AJAX call
	$.getJSON('/SomePath2', function(response){
		// Store the response from the server
		dataLoader.data.function2Response = response;
		// Mark this function as complete
		dataLoader.functionCompleted();
	});
}

```

