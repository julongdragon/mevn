// console.log(module.filename)
// console.log(__filename)

let level = 1

module.exports = {
    powerup: () => level += 1,
    getLevel: () => level
}