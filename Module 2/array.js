// const myArr = [1, 2, 3, 4, 5, 14, 99, 71, 9]


const myArr2 = new Array(1, 2, 3, 4)

// console.log(myArr);

//  Array Methods +++++++++++++++++++++++++++++++++

// myArr.push(6)  // add one 
// myArr.pop()  // remove one index length last

// myArr.unshift(99)
// myArr.shift()

// console.log(myHeros.includes("spiderman"));

// console.log(myArr.indexOf(14));


// const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);  /// newArr will be string

// console.log(typeof newArr);

// Slice and Splice ========++++++++++++++++

// const myArr = [0, 1, 2, 3, 4, 5, 14, 99, 71, 9]
// console.log("A", myArr);

// const myn1 = myArr.slice(1, 5)
// console.log(myn1);
// console.log("B", myArr);

// const myn2 = myArr.splice(1, 5)
// console.log("c", myArr);
// console.log(myn2);

// const marvel_heros = ["Ironman", "Thor", "Hulk"]
// const dc_heros = ["wonder women", "superman", "batman"]

// const heros = marvel_heros.concat(dc_heros)  // concat
// console.log(heros);

// const all_heros = [...marvel_heros, ...dc_heros]  /// spread operator
// console.log(all_heros);

const another_array = [2, 3, 5, [7, 3, [8, 3, 5, [5]]]]
const real_another_array = another_array.flat(Infinity) 
console.log(real_another_array);




