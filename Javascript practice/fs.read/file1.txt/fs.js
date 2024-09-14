const fs = require("fs") // Synchrounous way of reading a file
fs.readFile('file1.txt', "utf8", (err, data) => {
if(err) {
console.error(err)
console.error("Some problem in reading file")
}
console.log(data)
})