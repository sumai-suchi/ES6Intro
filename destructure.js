// const actor={
//     name:'john',
//     phone:'0171824317',
//     age:56,
// }


//if right side is a object than left side of a destructuring will be a object too.
//use property name as a variable which contains a property value.

// const {name,phone,age : boyos}=actor

// console.log(name);
// console.log(phone);
// // console.log(age);
// console.log(boyos);


//destructuring array

const number=[12,13];
const [first,second]=number;
const [x,y]=[24,50];


function doubleThem(a,b)
{
    return [a*2,b*2]
}

const [prothom,ditiyo]=doubleThem(6,9);
console.log(prothom,ditiyo);