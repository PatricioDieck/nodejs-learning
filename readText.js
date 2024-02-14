const { readFile, readFileSync } = require('fs').promises

// const txtSync = readFileSync('./hello.txt', 'utf-8')

//readFile is an asynchronous function (non-blocking) that is callBack based instead of Promise based. I imported it with the promises API to be able to chain the callbacks at the end 

readFile('./hello.txt', 'utf-8').then((text)=> console.log(text))


console.log('do this ASAP')