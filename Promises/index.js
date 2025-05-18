// let first_promise = new Promise((resolve,reject)=>{
//     console.log("Babbar");
//     resolve(1001)
// });

// let second_promise = new Promise((resolve,reject)=>{
//     console.log("Babbar")
//     //reject(new Error("Internet server Error"))
// });

// let third_promise = new Promise((resolve,reject)=>{
//     setTimeout(function name(){
//         console.log("Tim")
//     },15000);
// });

// let forth_promise = new Promise((resolve,reject)=>{
//     console.log("start")
//     setTimeout(function say_hy(){
//         console.log("hy");
//     },10000)
//     console.log("end")
// })

// // Synchronous code:
// let fifth_promise = new Promise((resolve,reject)=>{
//     console.log("Hy, Tim!")
// })

// // Asynchronous code:
// let sixth_promise = new Promise((resolve,reject)=>{
//     console.log("javaScript is my favourite language!")
//     setTimeout(function print1(){
//         console.log("Tim teacher")
//     },20000)
//     //resolve(101)
//     reject(new Error("Server Error")
// }

let seventh_promise = new Promise((resolve,reject)=>{
    let success = true;
    if (success){
        resolve("Promise fulfilled")
    }
    else{
        reject("Promise not fulfilled")
    }

})

seventh_promise.then((message)=>{
    console.log("Message: ", message)
}).catch((error)=>{
    console.log("Error: ", error)
})

let eight_promise = new Promise((resolve,reject)=>{
    let number = 5
    if (number==5){
        resolve("Accepted!")
    }
    else{
        reject("Rejected!")
    }
})

eight_promise.then((message1)=>{
    console.log("Hy, my name is Tim! ")
    console.log(message1)
}).catch((error)=>{
    console.log("Error: ", error)
})

let nineth_promise = new Promise((resolve,reject)=>{
    let name = "Tim"
    if(name=="John"){
        resolve("Promise fulfilled one time!")
    }
    else{
        reject(-1)
    }
})

// nineth_promise.then(()=>{
//     console.log("Promise is completed!")
// }).catch(()=>{
//     console.log("Promise is not completed!")
// })

// Promise chaining

nineth_promise.then((message)=>{
    console.log(message, 1)
    return 2
}).then((message2)=>{
    console.log(message2)
    return 3
}).then((message3)=>{
    console.log(message3)
}).catch((error)=>{
    console.log(error)
}).finally(()=>{
    console.log("finally block always run!")
})

// Handle multiple promises

let promise1 = new Promise((resolve,reject)=>{
    setTimeout(resolve,1000,"First");
})
let promise2= new Promise((resolve,reject)=>{
    setTimeout(resolve,2000,"Second");
})
let promise3 = new Promise((resolve,reject)=>{
    setTimeout(resolve,4000,"Third")
})

Promise.all([promise3,promise2,promise3]).then((values)=>{
    console.log(values)
}).catch((error)=>{
    console.log(error)
})




