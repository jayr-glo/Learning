let promise = new Promise((resolve, reject) => {
	let success = true;

	if (success) {
		resolve("Operation was successful!");
	} else {
		reject("Operation failed.");
	}
});

promise.then(result => {
	console.log(result); // "Operation was successful!"
})
	.catch(error => {
		console.error(error); // If the promise is rejected
	});
