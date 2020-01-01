var fs = require('fs');
var path = require('path');

const config = require('./config')

function generate() {

	fs.writeFile('config.json', JSON.stringify(config, undefined, 2), 
	function(error) {
		if (error) {
				console.error("write error:  " + error.message);
		} else {
				console.log("Successful write to ./config.json");
		}
	})
}

generate()