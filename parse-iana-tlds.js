(() => {
	const fs = require("fs");
	// const http = require("http");
	// const url = "http://data.iana.org/TLD/tlds-alpha-by-domain.txt";
	// const fileName = "copy-iana-tlds.txt";
	// const file = fs.createWriteStream(fileName);
 	try {
		// http.get(url, response => {
			// response.pipe(file);
			fs.readFile("copy-iana-tlds.txt",'utf8', (err, data) => {
				if (err) throw err;
				const list = data.split("\n")
					.filter((tld,i)=>i!==0)
					.map(tld=>tld.replace("\r",""))
				;
				const json = JSON.stringify({list: list});
				fs.writeFile("iana-tlds.json", json, (err) => {
					if (err) throw err;
					// console.dir(list, {'maxArrayLength': null});
					console.log(list.length)
				});
			});
		// });
	}
	catch(err) {
		console.log(err);
	};
})();