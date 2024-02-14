function resolveAfter2Seconds() {
    return new Promise((resolve, sad) => {
        setTimeout(() => {
            resolve("We done it");
        }, 2000);
    });
}

function heavyProcess() {
    return new Promise((resolve, reject) => {
        setTimeout(() => { resolve('time delay') }, 2000)
    })
}

async function AmongUs() {
    const twoSec = await resolveAfter2Seconds()
    console.log(twoSec)
    const heavy = await heavyProcess()
    console.log(heavy)
}


function meta() {
    console.log('first shit')
    AmongUs().then((res) => console.log(res))
    console.log('second shit')
}

meta()