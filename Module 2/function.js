// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2);
// }

// addTwoNumbers(3, 5)

function addTwoNumbers(number1, number2) {
    // let result = (number1 + number2);
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)
// console.log("Result:", result);


// function loginUserMessage(username = "abc") {
//     if(username === undefined) {
//        console.log("Please enter your name");
//        return
//     }
    
//     return `${username} just logged in`  
// }
// console.log(loginUserMessage("Mohit"));


// function addToCartPrice(...num1) {
//      return num1
// }

// console.log(addToCartPrice(200, 400, 500));

const user = {
    username: "Mohit",
    price: 400
}

function handleObject(anyObject) {
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`)
}
// handleObject(user);
handleObject( {
    username: "rohit",
    price: 999
})

const myNewArray = [400, 500, 600]

function newArr(updatedArr) {
   return updatedArr[1]
}
console.log(newArr(myNewArray));