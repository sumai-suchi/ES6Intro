//function declaration
function add(a,b)
{
    const result=a+b;
    return result;
}

function add(a,b)
{
    
    return a+b;
}

const sum=add(5,7);

//function expression ba anonymous function

const add2=function(a,b)
{
    return a+b;
}

//arrow function

const add3=(a,b) => a+b;

const result=add3(4,29);
console.log(result);

const multiply=(num,num2) => num* num2;

const mul=multiply(30,20);
console.log(mul);


//three ways to write function parameters

// if there is no parameter
const myName=() => console.log('Jon');

//if there is one parameter
const myName2=(a) => a*a;

//is there is multiple parameters

const myName3=(num,num2,num3) => num+num2+num3;

