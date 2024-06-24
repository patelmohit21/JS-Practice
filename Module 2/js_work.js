let val1 = 10
let val2 = 20

 function addnum(num1, num2){
    let total = num1 + num2
    return total
}

let result1 = addnum(val1, val2)
let result2 = addnum(5, 3)

// steps +++++++++++++++++

// 1 Global exection (this)

// 2 Memory phase/creation phase

// val1 => undefined
// val2 => undefined
// addnum => defination
// result1 => undefined
// result2 => undefined

// 3 exection phase

// val1 = 10
// val2 = 5
// addnum => new varibale enviroment + exection tread =>

// then once agin two phase 

// memory phase =>
// val1 = undefined
// val2 = undefined
// total = undefined 

// exection context => 
// num1 = 10
// num2 20
// total = 30  => Global execution 

// Then => new varibale enviroment + exection tread => (delete)


// 3 exection phase

// val1 = 10
// val2 = 5
// addnum => 

result 2 => new varibale enviroment + exection tread =>

// then once agin two phase 

// memory phase =>
// val1 = undefined
// val2 = undefined
// total = undefined 

// exection context => 
// num1 = 10
// num2 20
// total = 30  => Global execution 

// Then => new varibale enviroment + exection tread => (delete)


// Call Stack (Lefo // Last in last Out)


function one(){
    console.log("one");
}

function two(){
    console.log("two");
}
function three(){
    console.log("three");
}

one()
two()
three()

