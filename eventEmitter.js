//event driven runtime- this is managed by the event loop
//can have functions run on event happenings
//need to know how EVENTS and callbacks work- here is how events work

// const {onExit} = require('./callBack')

const {EventEmitter} = require('events')
const eventEmitter = new EventEmitter()

eventEmitter.on( 'lunch', () =>{
    console.log('yum 🍣')
})

eventEmitter.emit('lunch')
eventEmitter.emit('lunch')

