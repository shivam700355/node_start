// function SaveToDatabase(data) {
//     return new Promise((resolve, reject) => {
//         let randomnumber = Math.floor(Math.random() * 10) + 1;

//         if (randomnumber > 4) {
//             resolve(data);
//         } else {
//             reject(data);
//         }
//     });
// }

// // Calling the function and handling the promise
// let data=SaveToDatabase("shivam")
//     .then((res) => {
//         console.log("Resolved:", res);
//     })
//     .catch((err) => {
//         console.log("Rejected: data was not saved", err);
//     });
// console.log(data);

// async function Add() {
//     return "hello world";
// };
// console.log(Add());
// Add().then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })

// function GetSUM() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let num = Math.floor(Math.random() * 10) + 1;
//             console.log(num);
//             if (num > 5) {
//                 resolve();
//             }
//             else {
//                 reject();
//             }
//         }, 1000)
//     });
// }
// async function Add() {
//     try {
//         await GetSUM();
//         await GetSUM();
//         await GetSUM();
//     } catch (err) {
//         console.log("Error occured");
//     }

// }
// Add();

let url = "https://dummyjson.com/products";
fetch(url).then((res) => {
    res.json().then((data) => {
        console.log(data);
        let products=document.getElementById("productdata");
        products.innerHTML=data.products.map((products)=>{
            return `<div class="product">
            <h2>${products.title}</h2>
            <p>${products.price}</p>
            <p>${products.description}</p>
            </div>`;
        })
    }).catch((err) => {
        console.log(err);
    });
}).catch((err) => {
        console.log(err);
    })






