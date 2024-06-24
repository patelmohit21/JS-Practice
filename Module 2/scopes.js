// let a = 300   // Global  Scope 

// if(true) {
//   let a = 10
//    console.log("Result:", a); // block scope
// }

// console.log(a);


// const username = "mohit"

// if(true){
//     const youtube = "hitesh.com"
//     console.log(username + youtube);
// }

// console.log(username);


// function addOne(num) {
//      return num + 1
// }

// console.log(5);

///  ================= Arrow Function +++++++++++++++

// const user = {
//      username: "Mohit",
//      price: 999,
//      welcomemessage: function() {
//         console.log(`${this.username} Welcome to the website`);

        
//      }
// }
// user.welcomemessage();
// console.log(this);

// const add = (num) => {
//     let add = num + 1
//      console.log( `${num} + 1 = ${add}`);
// }

// add(9);

const addnum = (num1, num2) => num1 + num2

console.log(addnum(5, 9));


(function iife(){
    console.log(`DB Connected`);  // name iife
}) ();

((name) => {
    console.log(`DB Connected ${name}`);
}) ('mohit')



