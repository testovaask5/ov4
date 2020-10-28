// function getMessageFromServer(offset) {
//     fetch(`http://user08.test1.seschool.ru:3000/api/chat/?offset=${offset}&limit=1`).then((response) => {
//         if (response.ok) {
//             return response.json()
//         }
//     }).then((message) => {
//         console.log(message[0].id);
//     })
// }

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve()
//     }, 2000)
//     setTimeout(() => {
//         reject()
//     }, 1000)
// })

// promise.then(() => {
//     console.log('Success')
// }).catch(() => {
//     console.log('Rejected')
// })

function delay(ms, response) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(response), ms)
    })
}

fetch(`http://user08.test1.seschool.ru:3000/api/chat/?offset=0&limit=1`)
.then((response) => {
    return delay(2000, response)
})
.then((response) => {
    if (response.ok) {
        return response.json()
    }
})
.then((message) => {
    console.log(message[0].id);
    return 'Step 1'
})
.then((message) => {
    console.log(message);
    return fetch(`http://user08.test1.seschool.ru:3000/api/chat/?offset=1&limit=1`)
})
.then((response) => {
    return delay(2000, response)
})
.then((response) => {
    if (response.ok) {
        return response.json()
    }
})
.then((response) => {
    return delay(2000, response)
})
.then((message) => {
    console.log(message[0].id);
})



// getMessageFromServer(0)
// setTimeout(() => {
//     console.log('Step 1');
//     getMessageFromServer(1)
//     setTimeout(() => {
//         console.log('Step 2');
//         getMessageFromServer(2)
//         setTimeout(() => {
//             console.log('Step 3');
//             getMessageFromServer(3)
//             setTimeout(() => {
//                 console.log('Step 4');
//                 getMessageFromServer(4)
//             }, 1500)
//         }, 1500)
//     }, 1500)
// }, 1000)
