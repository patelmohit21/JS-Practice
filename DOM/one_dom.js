const parent = document.querySelector('.parent');
// console.log(parent);
// console.log(parent.children);
// console.log(parent.children[2].innerHTML);

for (let i = 0; i < parent.children.length; i++) {
    //console.log(parent.children[i].innerHTML)
    
}

parent.children[2].style.color = "green";

const dayOne = document.querySelector('.day');

console.log(dayOne);
console.log(dayOne.parentElement);