const events = require('events')
const Emitter = events.EventEmitter

var event = new Emitter()

event.on('walk',()=>{
    console.log("walk now")
})
event.on('hadouken',()=>{
    console.log("hadouken")
})

event.emit("walk")
event.emit("hadouken")