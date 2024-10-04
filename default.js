//if value is not provided take this as default

function add(num,num2=0)
{
    const sum=num+num2;
    console.log(num,num2,sum);
    return sum;

}

const sum=add(5);
console.log(sum);


function fullName(first,last='')
{
    const name=first+' '+last;
    return name;
}

const name1=fullName('ria');
console.log(name1); 


//array

function array (number=[])
{

}

//object 
function object(human={})
{
    
}