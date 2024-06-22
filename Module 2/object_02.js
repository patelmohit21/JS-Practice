const tinderuser = {}

tinderuser.id = "abcd1234",
tinderuser.gmail = "jbbsj@gmail.com",
tinderuser.loggedIn = false

// console.log(tinderuser);

const facebookUser = {
    email: "rohit@gmail.com",
    username: {
        fullname: "mohit",
        lastname: "patel",
        id: {
            userid: "ddd123"
        }
    }
}

// console.log(facebookUser.username.id);

obj1 = {1: "a", 2: "b", 3: "c"}
obj2 = {4: "d", 5: "e", 6: "f"}

// console.log(Object.keys(obj1).length);

// const obj3 = Object.assign({}, obj1, obj2)  /// object asign interview question  

// const obj3 = {...obj1, ...obj2}  // spread

// console.log(obj3);

// Object destructuring

const cource = {
    courcename: "JS Full",
    courceprice: "999",
    courceteacher: "Hitesh"
}

// console.log(cource.courcename);

const {courceteacher: teacher} = cource

console.log(teacher);