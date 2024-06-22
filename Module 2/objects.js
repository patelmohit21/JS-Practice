// singleton

// Object.create

// literal

//define a symbol

const mySym = Symbol("key1");

const JsUser = {
    name: "Mohit",
    "full name": "mohit patel",
    [mySym]: "mykey1",
    age: 24,
    email: "mohit@gmail.com",
    address: "delhi",
    isLoggedIn: "false",
    lastLoginDays: ["monday", "sunday"]
}

console.log(JsUser.email);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);

// JsUser.email = "mohit@js.com"

// console.log(JsUser["email"]);   // object chng

// Object.freeze(JsUser)  /// freeze the object cant change

// JsUser.email = "mohit@react.com"

// console.log(JsUser["email"]);

 JsUser.greeting =  function(){                 // function declare in JS
    console.log("Hello JS User");
}

JsUser.greetingTwo =  function(){
    console.log(`1hello Js User ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
