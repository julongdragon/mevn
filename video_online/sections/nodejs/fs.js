const fs = require('fs')

fs.readFile("demo.txt", { "encoding": "UTF-8" }, function(error, data) {
    console.log(data)
})

fs.readFile("demo.txt", "UTF-8", (error, data2) => {
    console.log("2" + data2)
})

var ผล = fs.readFileSync("demo.txt", "UTF-8")
console.log("3" + ผล)
console.log("4")