// for loop

for (let i = 0; i <= 20; i++) {
    const element = i;
    if (element == 14){
       // console.log(`My Lucky no ${i}`);
    }
    //console.log(element);
    
}

for (let i = 1; i <= 10; i++) {
    //console.log(`Outer loop ${i}`);
    for (let j = 1; j <= 10; j++) {
        //console.log(i + '*' + j + '=' + i*j);
        
    }
    
}

for (let index = 1; index <= 20; index++) {
    const element = index;
    if(index == 14){
       // console.log("14")
        break
    }
    //console.log(element);
    
}


///   while and do while loop +++++++++++++++++++++++++++++++++++++================


let index = 0
while (index <= 10) {
    console.log(`${index}`);
    index = index + 2
}