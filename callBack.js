//here is how callbacks work- listen to events this one is called when the exit event happens. Callback is second arg

process.on('exit', function(){
    console.log('this function runs after the process is exited')
})

//this is a callback- gets run after the process gets done/exited. This happens at the end of every script



