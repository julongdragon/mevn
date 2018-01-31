/*

var  - global scope

let  - block scope
 
const - ค่าคงที่ ไม่สามารถเปลี่ยนแปลงค่าได้

*/

var number = 0

for (var x = 0; x < 3; x++) {
    number += x
        //console.log(x)
        /**
         * 
         *  number = 0 + 0    // รอบที่ 1   0
         *  number = 0 + 1    // รอบที่ 2   1
         *  numer  = 1 + 2    // รอบที่ 3   3 
         */
}
console.log(x)
console.log(number)

const http = "server"



console.log(http)