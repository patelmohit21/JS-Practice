// for of loop
const greetings = "HelloWorld!"

for (const greet of greetings) {
   // console.log(greet);
}

// map

const map = new Map()

map.set('IN', 'INDIA')
map.set('UP', 'UTTA PRADESH')
map.set('DL', 'DELHI')
map.set('MP', 'MADHYA PRADESH')

console.log(map);

for (const [key, value] of map) {
    //console.log(key, ":=", value);
}

const coding = ["java","c++","js","python"]

coding.forEach( function (item){
    //console.log(item);
})

coding.forEach( (val) =>{
    //console.log(val);
})

coding.forEach( (val, index, arr) =>{
    //console.log(val, index, arr);
})

const myCoding = [
    {
        langname: "javascript",
        filename: "JS"
    },
    {
        langname: "python",
        filename: "JS"
    }
]

myCoding.forEach( (item) =>{
    console.log(item.langname);
})