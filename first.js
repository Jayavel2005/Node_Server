// console.log("Hello from NodeJs");


// const { log } = require("console");
// const fs = require("fs");
// fs.writeFileSync("hello.txt", "Hello from node js!");
// fs.writeFileSync("hello.txt", "jayavel");
// console.log(fs.readFileSync("hello.txt"));



// const person = {
//     name: "Jayavel",
// }

// const student = {
//     ...person,
//     age: 13,
// }        // This is called spread operator

// console.log(student);

// // rest operator used in function arugments

// const arr = (...args) => {
//     return args
// }

// console.log(arr(1,2,4,5,6));



// Object destructring
// const person = { name: "Jayavel", age: 19 };
// const { name, age } = person;
// console.log(name, age);

// // Array Detructring
// const arr = [1, 2, 3, 5];
// const [n1, n2] = arr;
// console.log(n1, n2);

// const fetchData = (callback) => {
//     callback()
// }

// setTimeout(() => {
//     fetchData(() => {
//         console.log("data fetch");

//     })
// }, 2000);


// console.log("hello");

// function data(inner) {
//     setTimeout(() => {
//         inner("Jayavel + after 2 seconds");
//     }, 2000)
// }
// data((name) => {
//     console.log(name);

// })

// function myPromise(succes) {
//     return new Promise((resolve, reject) => {

//         console.log("task Started");
//         setTimeout(() => {
//             if (succes) {
//                 resolve("This is resolve!");
//             } else {
//                 reject("Task is failed")
//             }

//         }, 2000)

//     })
// }

// myPromise(true).then((message) => {
//     console.log("resolve block");
//     console.log(message);


// }).catch((error) => {
//   console.log("This is reject block");
//   console.log(error);


// })




function myPromise(success) {
    return new Promise((resolve, reject) => {

        console.log("Task Started:");

        setTimeout(() => {
            if (success) {
                resolve("Task Runned Successfully");
            } else {
                reject("Task rejected");
            }
        }, 2000)

    })
}

myPromise(true)
    .then((message) => {
        console.log("Resolve Block: ");
        return message;
    })
    .then((message) => {
        console.log("second then");
        
        console.log(message);
        
    })
    .catch((error) => {
        console.log("Reject Block");
        console.log(error);


    })