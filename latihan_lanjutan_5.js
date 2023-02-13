function tunggu(timeInSec) {
    let myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('resolved')
        }, timeInSec * 1000)
    })
    return myPromise
}

async function pakaiAsync() {
    try {
        let res1 = await tunggu(10)
        let res2 = await tunggu(5)
        console.log(res1)
        console.log(res2)
    } catch (error) {
        console.log(error)
    }
}

function pakaiPromiseAll() {
    Promise.all([tunggu(10), tunggu(5)])
        .then((responses) => {
            console.log(responses[0])
            console.log(responses[1])
        }).catch((error) => {
            console.log(error)
        })
}

//komen salah satu dan bandingkan waktunya
pakaiAsync()
// pakaiPromiseAll()