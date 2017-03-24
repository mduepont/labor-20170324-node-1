const fs = require('fs');

fs.readFile('./readme.txt', (err, data) => {
  if (err) throw err;
  console.log(data.toString('utf-8'));
});
console.log("");
console.log("Ausgabe der Datei:");
console.log("__________________");