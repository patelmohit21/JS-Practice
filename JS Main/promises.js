// new Promise(function(resolve, reject){
//    setTimeout(function(){
//     //console.log("Async is waiting");
//     resolve()
//    }, 1000)
// }).then(function(){
//     //console.log("async is completed");
// })

// const promiseOne = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({user: "mohit", email:"patelmohiy672@gmail.com"})
//     }, 1000)
// })

// promiseOne.then(function(user){
//   //console.log(user);
// })

const promiseTwo = new Promise(function(resolve, reject){
    setTimeout(() =>{
        let error = false
        if(!error){
            resolve({name:"mohit", lastname:"patel"})
        } else {
            reject("something went wrong")
        }
    }, 1000)
})

promiseTwo.then(function(user) {
    console.log(user);
    return user.name;
}).then( (name) =>{
    console.log(name);
}).catch( (error) =>{
    console.log(error);
}).finally( ()=> {console.log("problem fixed");})

// async function getAllusers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.org/comments')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

// getAllusers()

fetch('https://jsonplaceholder.org/comments')
.then((response) => {
    return response.json()
}).then((data)=> {
    console.log(data);
}).catch( (error)=> {
   console.log(error);
})