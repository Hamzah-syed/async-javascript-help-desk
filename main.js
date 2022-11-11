// const func1 = (callback) => {
//     console.log("function one invoked")
//     callback()
// }

// func1(() => console.log("function two invoked"))



// console.log("First")

// setTimeout(() => {
//     console.log("Second")
// }, 3000)

// console.log("third")

// const loginUser = (email, password, cb) => {
//     setTimeout(() => {
//         cb(email)
//     }, 2000)
// }

// const getUserVideos = (email, cb) => {
//     setTimeout(() => {
//         cb(["video1", "video2", "video3"])
//     }, 2000)
// }

// loginUser("hamzah@abc.com", 1234, (email) => {
//     console.log("User logged in", email)
//     getUserVideos(email, (videos) => {
//         console.log(videos)
//     })
// })


// const getMyMarks = () => {
//     return new Promise((resolve, reject) => {
//         let myMarks = 81
//         if (myMarks >= 80) {
//             resolve("A")
//         } else {
//             reject()
//         }
//     })
// }



// getMyMarks().then((grade) => {
//     console.log(grade)
// })



const loginUserPromise = (email, password) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (email === "hamzah@abc.com" && password === 1234) {
                resolve(email)
            } else {
                reject("Wrong email or password")
            }
        }, 2000)
    })
}

const getUserVideos = (email) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (email) {
                resolve(["video1", "video2", "video3"])
            } else {
                reject("Email Not Found")
            }
        }, 2000)
    })
}


// loginUserPromise("hamzah@abc.com", 12345)
//     .then((email) => {
//         console.log(email)
//         return getUserVideos(email)
//     })
//     .then((video) => {
//         console.log(video)
//     })
//     .catch((err) => {
//         console.log(err)
//     })





// setTimeout(() => {
//     if (email) {
//         resolve(["video1", "video2", "video3"])
//     } else {
//         reject("Email Not Found")
//     }
// }, 2000)
