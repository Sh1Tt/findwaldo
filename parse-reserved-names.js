(async () => {
	const fs = require("fs");
	const f = require("./copy-reserved-names.json");
	const fileName = "reserved-names.json";
	const list = Object.values(f)
	.filter((a,i)=>i!==0)
	.map((a,i)=>a[0]);
	const json = JSON.stringify({reserved: list});
	fs.writeFile(fileName, json, (err) => {
		if (err) throw err;
	});
})();